$ErrorActionPreference = 'Continue'
$base = 'http://localhost:3000'
$out = 'c:\Projects\neasx\.results.txt'
"### ping" | Tee-Object $out
$hc = curl.exe -s -o nul -w '%{http_code}' --max-time 8 "$base/en" 2>$null
"ping /en: $hc" | Tee-Object $out -Append

"### signup" | Tee-Object $out -Append
$sb = (@{ name='x'; email="dbg-$(Get-Random)@neasx.com"; password='Pass123123' } | ConvertTo-Json -Compress)
"payload: $sb" | Tee-Object $out -Append
$cookie = ''
try {
  $r = Invoke-WebRequest -Uri "$base/api/auth/signup" -Method Post -Body $sb -ContentType 'application/json' -UseBasicParsing -TimeoutSec 18 -ErrorAction Stop
  "SIGNUP_STATUS: $($r.StatusCode)" | Tee-Object $out -Append
  $sc = ($r.Headers['Set-Cookie'] -join '; ')
  "SIGNUP_SET_COOKIE: $sc" | Tee-Object $out -Append
  "SIGNUP_BODY: $($r.Content)" | Tee-Object $out -Append
  if ($sc -match 'neasx_session=([^;]+)') { $cookie = $Matches[1] }
  "SESSION_ABBR: $($cookie.Substring(0,[Math]::Min(40,$cookie.Length)))" | Tee-Object $out -Append
} catch [System.Net.WebException] {
  $resp = $_.Exception.Response
  $st = if ($resp) { $resp.StatusCode } else { 'n/a' }
  "SIGNUP_WEBXC: $st" | Tee-Object $out -Append
  if ($resp) { $rd = New-Object IO.StreamReader($resp.GetResponseStream()); "SIGNUP_BODY: $($rd.ReadToEnd())" | Tee-Object $out -Append }
} catch { "SIGNUP_ERROR: $($_.Exception.Message)" | Tee-Object $out -Append }

if ($cookie) {
  "### me" | Tee-Object $out -Append
  try { $r2 = Invoke-WebRequest -Uri "$base/api/auth/me" -Headers @{ Cookie="neasx_session=$cookie" } -UseBasicParsing -TimeoutSec 12 -ErrorAction Stop; "ME_STATUS: $($r2.StatusCode)" | Tee-Object $out -Append; "ME_BODY: $($r2.Content)" | Tee-Object $out -Append } catch { "ME_ERROR: $($_.Exception.Message)" | Tee-Object $out -Append }
  "### generate" | Tee-Object $out -Append
  $gb = (@{ prompt='Merhaba'; tool='chat' } | ConvertTo-Json -Compress)
  try { $r3 = Invoke-WebRequest -Uri "$base/api/ai/generate" -Method Post -Body $gb -ContentType 'application/json' -Headers @{ Cookie="neasx_session=$cookie" } -UseBasicParsing -TimeoutSec 20 -ErrorAction Stop; "GEN_STATUS: $($r3.StatusCode)" | Tee-Object $out -Append; "GEN_BODY: $($r3.Content)" | Tee-Object $out -Append } catch [System.Net.WebException] { $resp=$_.Exception.Response; $st = if($resp){$resp.StatusCode}else{'n/a'}; "GEN_WEBXC: $st" | Tee-Object $out -Append; if($resp){ $rd=New-Object IO.StreamReader($resp.GetResponseStream()); "GEN_BODY: $($rd.ReadToEnd())" | Tee-Object $out -Append } } catch { "GEN_ERROR: $($_.Exception.Message)" | Tee-Object $out -Append }
} else { "### SKIP me/generate (no cookie)" | Tee-Object $out -Append }
