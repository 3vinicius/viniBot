#!/bin/bash

urlDownload=$1
pitch=$2


# Verifica se a URL foi fornecida
if [[ -n "$urlDownload" ]]; then
    # Nome do arquivo de saída fixo
    outputFileName="audio_output.wav"

    # Executa yt-dlp e redireciona a saída para um arquivo de log
    yt-dlp --extract-audio --audio-format wav --output "$outputFileName" "$urlDownload" > yt-dlp.log 2>&1

    # Verifica se o arquivo foi criado
    if [[ -f "$outputFileName" ]]; then
        echo "Downloaded and converted to: $outputFileName"
        fileName="$outputFileName"
    else
        echo "Error: File not created"
        exit 1
    fi
else
    echo "Error: URL not provided"
    exit 1
fi

# Verifica se o pitch e o nome do arquivo foram fornecidos
if [[ -n "$pitch" && -n "$fileName" ]]; then
    # Usa soundstretch para obter o BPM
    bpm=$(soundstretch "$fileName" -bpm 2>&1 | grep -oP "(?<=Detected BPM rate ).*")

    if [[ -n "$bpm" ]]; then
        echo "Detected BPM: $bpm"
        # Ajusta o pitch do arquivo usando soundstretch
        outputFile="${fileName%.wav}_pitch${pitch}_bpm${bpm}.wav"
        soundstretch "$fileName" "$outputFile" -pitch="$pitch"
        echo "outputFile = $outputFile"
    else
        echo "Error detecting BPM"
        exit 1
    fi
else
    echo "Error: pitch or fileName not provided"
    exit 1
fi