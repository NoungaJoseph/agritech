$output = @()
$folders = Get-ChildItem "public/images" -Directory
foreach ($folder in $folders) {
    $files = Get-ChildItem "$($folder.FullName)" -File -Filter "*.webp" | Select-Object -ExpandProperty Name
    if ($files.Count -gt 0) {
        $output += "`n$($folder.Name):"
        foreach ($file in $files) {
            $output += "  $file"
        }
    }
}
$output | Out-File "image_mapping.txt"
Write-Host "Mapping saved to image_mapping.txt"
