Write-Output "OneStep by FloatSheep"
Write-Output "宇宙安全声明：本项目由键盘自动生成，由 DelftStack & Microsoft Learn 提供技术指导"
Write-Output "脚本基础功能由 FloatSheep 编写，由 GPT-4 Turbo 进行梳理"
Write-Output "检查环境..."

$nodeVersion = Invoke-Command { node -v }
$npmVersion = Invoke-Command { npm -v }
Write-Output "node.js 版本: $nodeVersion"
Write-Output "npm 版本: $npmVersion"
Write-Output ""

$defaultFolder = Get-Location
$configFile = "$defaultFolder\v.config.json"

if (-not (Test-Path -Path $configFile)) {
  $publishFolder = Read-Host "你想要发布的目录（以./开头），缺省值(./public/)"
  if (-not $publishFolder) {
    $publishFolder = "./public/"
  }

  $packageFile = Read-Host "你的 package.json 文件，缺省值(./package.json)"
  if (-not $packageFile) {
    $packageFile = "./package.json"
  }

  $cnpmPure = Read-Host "刷新 cnpm 缓存，缺省值(false)"
  if (-not $cnpmPure) {
    $cnpmPure = true
  }

  $config = @{
    publishFolder = $publishFolder
    packageFile   = $packageFile
    cnpmPure      = $cnpmPure
  }

  $config | ConvertTo-Json | Set-Content $configFile
}
else {
  $config = Get-Content $configFile | ConvertFrom-Json
  $publishFolder = $config.publishFolder
  $packageFile = $config.packageFile
  $cnpmPure = $config.cnpmPure
}

if (-not (Test-Path -Path $publishFolder)) {
  Write-Output "发布目录不存在"
  Write-Output "[脚本] 退出"
  exit 1
}

if (-not (Test-Path -Path $packageFile -PathType Leaf)) {
  Write-Output "package.json 文件不存在"
  Write-Output "[脚本] 退出"
  exit 1
}

Set-Location $defaultFolder
npm version patch

Copy-Item $packageFile -Destination $publishFolder -Recurse

Set-Location $publishFolder
npm publish --access public

$packageData = Get-Content -Raw -Path $packageFile | ConvertFrom-Json

if ($cnpmPure) {
  Write-Output "刷新 cnpm 缓存"
  Write-Output "本脚本不会安装 cnpm, 请自行安装"
  cnpm sync $packageData.name
}

Set-Location $defaultFolder
exit 0