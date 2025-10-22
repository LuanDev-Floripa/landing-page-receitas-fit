#!/bin/bash

echo "🥗 Receitas Fit - Landing Page"
echo "=============================="
echo ""
echo "Escolha uma opção:"
echo "1) Iniciar servidor de desenvolvimento"
echo "2) Fazer build de produção"
echo "3) Visualizar build de produção"
echo "4) Instalar dependências"
echo ""
read -p "Digite o número da opção: " option

case $option in
  1)
    echo "🚀 Iniciando servidor de desenvolvimento..."
    npm run dev
    ;;
  2)
    echo "📦 Criando build de produção..."
    npm run build
    ;;
  3)
    echo "👀 Visualizando build de produção..."
    npm run preview
    ;;
  4)
    echo "📥 Instalando dependências..."
    npm install
    ;;
  *)
    echo "❌ Opção inválida!"
    ;;
esac
