# 🥗 Receitas Fit - Landing Page

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Landing page profissional de alta conversão para o ebook "Receitas Fit - Re-educa Viva Saudável"

![Preview](https://via.placeholder.com/800x400/2d5016/ffffff?text=Landing+Page+Preview)

## ✨ Características

- 🎨 **Design Moderno** - Interface limpa e atraente com gradientes e animações
- 📱 **Totalmente Responsivo** - Funciona em mobile, tablet e desktop
- ⚡ **Performance Otimizada** - Build de 194KB com Vite
- 🎯 **Alta Conversão** - Gatilhos mentais e elementos de urgência
- 🔔 **Prova Social** - Notificações de compra em tempo real
- ⏰ **Contador Regressivo** - Timer de urgência para desconto
- 🛒 **CTA Flutuante** - Botão de compra sempre visível
- 👥 **Social Proof** - Contador de visualizações ao vivo

## 🚀 Demo

[Ver Demo ao Vivo](https://seu-link-aqui.vercel.app) _(em breve)_

## 📸 Screenshots

### Hero Section
![Hero](https://via.placeholder.com/600x400/4a7c59/ffffff?text=Hero+Section)

### Benefícios
![Benefits](https://via.placeholder.com/600x400/f4a261/ffffff?text=Benefits+Section)

### Checkout
![Checkout](https://via.placeholder.com/600x400/2d5016/ffffff?text=Checkout+Section)

## 🛠️ Tecnologias

- **[React 18.2.0](https://reactjs.org/)** - Biblioteca UI
- **[Vite 4.4.5](https://vitejs.dev/)** - Build tool e dev server
- **CSS Variables** - Sistema de design escalável
- **[Line Icons](https://lineicons.com/)** - Biblioteca de ícones
- **[Google Fonts](https://fonts.google.com/)** - Tipografia Inter

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/landing-page-receitas-fit.git

# Entre no diretório
cd landing-page-receitas-fit

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎯 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento (porta 3000)
npm run build    # Cria build de produção
npm run preview  # Visualiza build de produção
```

## 📂 Estrutura do Projeto

```
landing-page-receitas-fit/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Cabeçalho fixo
│   │   ├── Hero.jsx                # Seção hero
│   │   ├── Benefits.jsx            # Cards de benefícios
│   │   ├── Testimonials.jsx        # Depoimentos
│   │   ├── Checkout.jsx            # Formulário de compra
│   │   ├── Footer.jsx              # Rodapé
│   │   ├── FloatingCTA.jsx         # Botão flutuante
│   │   ├── PurchaseNotifications.jsx  # Notificações de compra
│   │   ├── SocialProof.jsx         # Prova social ao vivo
│   │   └── CountdownTimer.jsx      # Timer regressivo
│   ├── App.jsx                     # Componente principal
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Estilos globais
├── index.html                      # HTML base
├── vite.config.js                  # Config do Vite
└── package.json                    # Dependências
```

## 🎨 Componentes

### FloatingCTA
Botão de compra flutuante que aparece após scroll.
- Animação de entrada suave
- Badge de desconto animado
- Efeito shimmer contínuo

### PurchaseNotifications
Notificações de compra em tempo real.
- 10 perfis de compradores
- Aparece a cada 8-15 segundos
- Animações de entrada/saída

### SocialProof
Contador de visualizações e vagas.
- Atualização em tempo real
- Indicador "AO VIVO"
- Alerta de escassez

### CountdownTimer
Timer regressivo de urgência.
- Contagem de 2h30min
- Design premium
- Reset automático

## 🎯 Gatilhos Mentais Implementados

- ⏰ **Urgência** - Timer regressivo
- 🔥 **Escassez** - Vagas limitadas
- 👥 **Prova Social** - Pessoas comprando agora
- 💪 **Autoridade** - Recomendação médica
- 💰 **Aversão à Perda** - Desconto por tempo limitado

## 📊 Performance

- **JS Bundle:** 194.61 KB (gzipped: 56.08 KB)
- **CSS:** 5.68 KB (gzipped: 1.83 KB)
- **Build Time:** ~1.6s
- **Lighthouse Score:** 95+ (Performance)

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Verde Escuro | `#2d5016` | Primário |
| Verde Médio | `#4a7c59` | Secundário |
| Laranja | `#f4a261` | Destaques |
| Cinza 900 | `#111827` | Texto |

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta dist/
```

### GitHub Pages

```bash
npm run build
# Configure GitHub Pages para servir da pasta dist/
```

## 📝 Customização

### Alterar Cores

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --green-dark: #2d5016;
  --green-medium: #4a7c59;
  --orange-subtle: #f4a261;
  /* ... */
}
```

### Modificar Timer

Em `src/components/CountdownTimer.jsx`:

```javascript
const [timeLeft, setTimeLeft] = useState({
  hours: 2,    // Altere aqui
  minutes: 30, // E aqui
  seconds: 0
})
```

### Adicionar Integração de Pagamento

Em `src/components/Checkout.jsx`, modifique a função `handleSubmit()` para integrar com:
- Hotmart
- Mercado Pago
- Stripe
- PayPal

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: seu@email.com

## ⭐ Mostre seu apoio

Dê uma ⭐ se este projeto te ajudou!

## 📞 Suporte

Tem alguma dúvida? [Abra uma issue](https://github.com/seu-usuario/landing-page-receitas-fit/issues)

---

**Feito com ❤️ e React**

🚀 **Pronto para converter visitantes em clientes!**
