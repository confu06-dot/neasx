$ErrorActionPreference = "Continue"
$base = "http://localhost:3000"

function PostJson($path, $obj, $cookie = $null) {
  $headers = @{ "Content-Type" = "application/json" }
  if ($cookie) { $headers["Cookie"] = $cookie }
  return Invoke-RestMethod -Uri "$base$path" -Method Post -Headers $headers -Body ($obj | ConvertTo-Json -Compress)
}

function TryPost($path, $obj) {
  try {
    $r = PostJson $path $obj
    return @{ Status = 200; Data = $r }
  } catch {
    return @{ Status = $_.Exception.Response.StatusCode.value__; Data = $null }
  }
}

# ---------- 1. Signup fresh free user ----------
$email = "e2e-$([DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds())@neasx.com"
$signupRes = Invoke-WebRequest -Uri "$base/api/auth/signup" -UseBasicParsing -Method Post -Headers @{"Content-Type"="application/json"} -Body (@{ name = "E2E Tester"; email = $email; password = "OldPass123!" } | ConvertTo-Json -Compress)
$cookie = ($signupRes.Headers["Set-Cookie"] -split ";")[0]
Write-Output "== STEP 1: SIGNUP =="
Write-Output "SIGNUP_EMAIL=$email"
Write-Output "SIGNUP_STATUS=$($signupRes.StatusCode)"
Write-Output "SIGNUP_COOKIE=$cookie"

# ---------- 2. Free user: generate should deduct 1 credit ----------
$gen1 = PostJson "/api/ai/generate" @{ prompt = "Merhaba"; tool = "chat" } $cookie
Write-Output "== STEP 2: GENERATE (free) =="
Write-Output "GEN_FREE_CREDITS_LEFT=$($gen1.creditsLeft) (expected 29999)"
Write-Output "GEN_FREE_CREDITS_USED=$($gen1.creditsUsed) (expected 1)"
Write-Output "GEN_FREE_TEXT_PREFIX=$($gen1.text.Substring(0, [Math]::Min(40, $gen1.text.Length)))"

# ---------- 3. Stream (free): SSE chunks + deduction ----------
Write-Output "== STEP 3: STREAM (free) =="
$client = New-Object System.Net.Http.HttpClient
$req = New-Object System.Net.Http.HttpRequestMessage([System.Net.Http.HttpMethod]::Post, "$base/api/ai/stream")
$req.Headers.Add("Cookie", $cookie)
$req.Content = New-Object System.Net.Http.StringContent('{"prompt":"Yapay zeka nedir?","tool":"chat"}', [System.Text.Encoding]::UTF8, "application/json")
$resp = $client.SendAsync($req, [System.Net.Http.HttpCompletionOption]::ResponseHeadersRead).Result
Write-Output "STREAM_HTTP_STATUS=$([int]$resp.StatusCode)"
$stream = $resp.Content.ReadAsStreamAsync().Result
$reader = New-Object System.IO.StreamReader($stream)
$lines = @()
$deadline = (Get-Date).AddSeconds(30)
$doneFound = $false
while (-not $doneFound -and (Get-Date) -lt $deadline) {
  $line = $reader.ReadLineAsync().Result
  if ($null -eq $line) { break }
  if ($line.Trim().Length -gt 0) { $lines += $line }
  if ($line -match '"done"') { $doneFound = $true }
}
$reader.Close()
Write-Output "STREAM_DONE=$doneFound"
Write-Output "STREAM_EVENT_COUNT=$($lines.Count)"
if ($lines.Count -gt 0) {
  $first = $lines[0] -replace '^data: ', ''
  $firstJson = $first | ConvertFrom-Json
  Write-Output "STREAM_FIRST_DELTA_PREFIX=$($firstJson.delta.Substring(0, [Math]::Min(40, $firstJson.delta.Length)))"
  $doneLine = $lines | Where-Object { $_ -match '"done"' } | Select-Object -First 1
  $doneJson = (($doneLine -replace '^data: ', '') | ConvertFrom-Json)
  Write-Output "STREAM_CREDITS_LEFT=$($doneJson.creditsLeft) (expected 29998)"
  Write-Output "STREAM_DEMO=$($doneJson.demo)"
}

# ---------- 4. Upgrade to pro ----------
$up = PostJson "/api/billing/checkout" @{ plan = "pro" } $cookie
Write-Output "== STEP 4: UPGRADE TO PRO =="
Write-Output "UPGRADE_PLAN=$($up.user.plan)"

# ---------- 5. Pro: generate should NOT deduct ----------
$p1 = PostJson "/api/ai/generate" @{ prompt = "Pro test bir"; tool = "chat" } $cookie
$p2 = PostJson "/api/ai/generate" @{ prompt = "Pro test iki"; tool = "chat" } $cookie
Write-Output "== STEP 5: GENERATE (pro, unlimited) =="
Write-Output "GEN_PRO_CREDITS_LEFT_1=$($p1.creditsLeft) (expected 29998)"
Write-Output "GEN_PRO_CREDITS_LEFT_2=$($p2.creditsLeft) (expected 29998)"
Write-Output "GEN_PRO_CREDITS_USED_2=$($p2.creditsUsed) (expected 0)"

# ---------- 6. Forgot-password (known account) ----------
$fp = PostJson "/api/auth/forgot-password" @{ email = $email }
Write-Output "== STEP 6: FORGOT-PASSWORD (known) =="
Write-Output "FORGOT_OK=$($fp.ok)"
Write-Output "FORGOT_LINK=$($fp.devLink)"
$token = ""
if ($fp.devLink -match 'token=([^&]+)') { $token = $Matches[1] }
Write-Output "FORGOT_TOKEN_EXTRACTED=$($token.Length -gt 0)"

# ---------- 7. Reset-password ----------
$rp = PostJson "/api/auth/reset-password" @{ token = $token; password = "NewPass456!" }
Write-Output "== STEP 7: RESET-PASSWORD =="
Write-Output "RESET_OK=$($rp.ok)"
Write-Output "RESET_MSG=$($rp.message)"

# ---------- 8. Reuse token -> should be 400 (one-time use) ----------
$reuse = TryPost "/api/auth/reset-password" @{ token = $token; password = "Another123!" }
Write-Output "== STEP 8: RESET REUSE =="
Write-Output "RESET_REUSE_STATUS=$($reuse.Status) (expected 400)"

# ---------- 9. Garbage token -> 400 ----------
$bad = TryPost "/api/auth/reset-password" @{ token = "garbage.token.here"; password = "Another123!" }
Write-Output "== STEP 9: RESET GARBAGE TOKEN =="
Write-Output "RESET_GARBAGE_STATUS=$($bad.Status) (expected 400)"

# ---------- 10. Empty token -> 400 ----------
$empty = TryPost "/api/auth/reset-password" @{ token = ""; password = "Another123!" }
Write-Output "== STEP 10: RESET EMPTY TOKEN =="
Write-Output "RESET_EMPTY_STATUS=$($empty.Status) (expected 400)"

# ---------- 11. Short password -> 400 ----------
$short = TryPost "/api/auth/reset-password" @{ token = $token; password = "123" }
Write-Output "== STEP 11: RESET SHORT PASSWORD =="
Write-Output "RESET_SHORT_STATUS=$($short.Status) (expected 400)"

# ---------- 12. Login with old password -> 401 ----------
$old = TryPost "/api/auth/login" @{ email = $email; password = "OldPass123!" }
Write-Output "== STEP 12: LOGIN OLD PASSWORD =="
Write-Output "LOGIN_OLD_STATUS=$($old.Status) (expected 401)"

# ---------- 13. Login with new password -> 200 ----------
$loginNew = Invoke-WebRequest -Uri "$base/api/auth/login" -UseBasicParsing -Method Post -Headers @{"Content-Type"="application/json"} -Body (@{ email = $email; password = "NewPass456!" } | ConvertTo-Json -Compress)
Write-Output "== STEP 13: LOGIN NEW PASSWORD =="
Write-Output "LOGIN_NEW_STATUS=$($loginNew.StatusCode) (expected 200)"

# ---------- 14. Forgot-password unknown email -> ok but no devLink ----------
$fpUnknown = PostJson "/api/auth/forgot-password" @{ email = "nobody-$([guid]::NewGuid().ToString('N'))@nonexistent.com" }
Write-Output "== STEP 14: FORGOT-PASSWORD (unknown) =="
Write-Output "FORGOT_UNKNOWN_OK=$($fpUnknown.ok)"
Write-Output "FORGOT_UNKNOWN_LINK=$($fpUnknown.devLink) (expected empty)"

# ---------- 15. Forgot-password invalid email -> 400 ----------
$fpInvalid = TryPost "/api/auth/forgot-password" @{ email = "not-an-email" }
Write-Output "== STEP 15: FORGOT-PASSWORD (invalid email) =="
Write-Output "FORGOT_INVALID_STATUS=$($fpInvalid.Status) (expected 400)"

# ---------- 16. Pages ----------
$pForgot = Invoke-WebRequest -Uri "$base/forgot-password" -UseBasicParsing
$pReset = Invoke-WebRequest -Uri "$base/reset-password?token=some.token" -UseBasicParsing
$pLogin = Invoke-WebRequest -Uri "$base/login" -UseBasicParsing
Write-Output "== STEP 16: PAGES =="
Write-Output "PAGE_FORGOT=$($pForgot.StatusCode) (expected 200)"
Write-Output "PAGE_RESET=$($pReset.StatusCode) (expected 200)"
Write-Output "PAGE_LOGIN=$($pLogin.StatusCode) (expected 200)"

