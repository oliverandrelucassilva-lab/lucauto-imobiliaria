#!/usr/bin/env bash
# Prepara um vídeo para acompanhar a rolagem (cada quadro é um ponto de parada, o que deixa o "arrastar" suave).
# Uso: bash scripts/otimizar-video-scroll.sh entrada.mp4 [saida.mp4]
# Requer ffmpeg instalado. Resultado em assets/video/planta.mp4 se a saída não for informada.
set -euo pipefail
entrada="${1:?Informe o vídeo de entrada}"
saida="${2:-assets/video/planta.mp4}"
mkdir -p "$(dirname "$saida")"
ffmpeg -y -i "$entrada" -an \
  -vf "scale='min(1280,iw)':-2,fps=24" \
  -c:v libx264 -preset slow -crf 24 -g 1 -pix_fmt yuv420p -movflags +faststart \
  "$saida"
echo "Pronto: $saida ($(du -h "$saida" | cut -f1)). Aponte plantaVideo no CONFIG e rode: node scripts/montar-v2.mjs"
