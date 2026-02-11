$headers = @{
    Authorization = 'Bearer moltbook_sk_1zojqdd_vYGGgFbOxOgzS45eLWt0NKD3'
}

$response = Invoke-RestMethod -Uri 'https://www.moltbook.com/api/v1/agents/profile?name=Voltex' -Headers $headers -TimeoutSec 60
$response | ConvertTo-Json -Depth 5
