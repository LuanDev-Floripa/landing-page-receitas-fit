#!/bin/bash

echo "🚀 Setup do GitHub para Landing Page"
echo "====================================="
echo ""

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📝 Configurando Git...${NC}"
read -p "Digite seu nome de usuário do GitHub: " username
read -p "Digite seu email do GitHub: " email
read -p "Digite o nome do repositório (ex: landing-page-receitas-fit): " repo_name

echo ""
echo -e "${GREEN}✅ Configurando Git global...${NC}"
git config --global user.name "$username"
git config --global user.email "$email"

echo -e "${GREEN}✅ Inicializando repositório...${NC}"
git init

echo -e "${GREEN}✅ Adicionando arquivos...${NC}"
git add .

echo -e "${GREEN}✅ Criando commit inicial...${NC}"
git commit -m "🎉 Initial commit: Landing Page Receitas Fit completa

- Hero section com animações
- Seção de benefícios
- Depoimentos de clientes
- Checkout com timer regressivo
- Botão flutuante de compra
- Notificações de compra em tempo real
- Prova social ao vivo
- Design responsivo e otimizado"

echo ""
echo -e "${BLUE}📦 Próximos passos:${NC}"
echo ""
echo "1. Crie um repositório no GitHub chamado: $repo_name"
echo "   https://github.com/new"
echo ""
echo "2. Execute os seguintes comandos:"
echo ""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/$username/$repo_name.git"
echo "   git push -u origin main"
echo ""
echo -e "${GREEN}✅ Setup concluído!${NC}"
