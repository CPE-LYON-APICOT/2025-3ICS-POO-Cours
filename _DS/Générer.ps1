# Parcourt tous les fichiers .rmd dans le dossier courant
Get-ChildItem -Path "." -Filter "*.md" | ForEach-Object {
    $inputFile = $_.FullName
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    $outputDir = Join-Path -Path "." -ChildPath $baseName

    # Crée un dossier portant le nom du fichier (sans extension) s'il n'existe pas
    if (!(Test-Path -Path $outputDir)) {
        New-Item -ItemType Directory -Path $outputDir | Out-Null
    }

    # Définir le chemin de base pour les fichiers de sortie
    $outputBase = Join-Path -Path $outputDir -ChildPath $baseName

    Write-Host "`nTraitement de $inputFile vers $outputDir"

    # Génération des fichiers dans différents formats
    pandoc.exe +RTS -K512m -RTS $inputFile `
        --from markdown+autolink_bare_uris+tex_math_single_backslash `
        --to docx `
        --output "$outputBase.docx" `
        --filter pandoc-plantuml

    pandoc.exe +RTS -K512m -RTS $inputFile `
        --from markdown+autolink_bare_uris+tex_math_single_backslash `
        --to pdf `
		--pdf-engine=xelatex `
        --output "$outputBase.pdf" `
        --filter pandoc-plantuml

   
}
