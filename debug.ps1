$ErrorActionPreference = 'Continue'
$base = 'http://localhost:3000'

Write-Host '=== SIGNUP (body) ==='
$sb = '{"name":"x","email":"p1@neasx.com","password":"Pass123123"}'
$signup = curl.exe -s --max-time 15 -i -X POST "$base/api/auth/signup" -H 'Content-Type: application/json' -d $sb
# print first line (status) and last chunk (body)
$lines = $signup -split "`r`n"
Write-Host "STATUS: $($lines[0])"
$hdr = $lines | Where-Object { $_ -imatch 'set-cookie' }
Write-Host "SET-COOKIE: $hdr"
Write-Host "BODY: $(($signup -split "`r`n`r`n")[-1])"

Write-Host '=== users.json ==='
if (Test-Path .\data\users.json) { Get-Content .\data\users.json -Raw } else { 'NO FILE' }

