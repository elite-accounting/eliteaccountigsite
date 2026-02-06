# Write all JSX files to disk
$basePath = "C:\Users\hboog\EliteAccounting"

# Create directories
New-Item -ItemType Directory -Path "$basePath\src\components" -Force | Out-Null
New-Item -ItemType Directory -Path "$basePath\src\sections" -Force | Out-Null

Write-Host "Directories created. Now writing files..."
