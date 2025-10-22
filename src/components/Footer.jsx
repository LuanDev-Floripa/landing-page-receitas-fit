import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--gray-900), var(--gray-800))',
      color: 'var(--white)',
      padding: 'var(--space-20) 0 var(--space-8)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(auto-fit, minmax(250px, 1fr))' : '1fr',
            gap: 'var(--space-12)',
            marginBottom: 'var(--space-12)'
          }}>
            {/* Logo and Social */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                marginBottom: 'var(--space-8)'
              }}>
                <i className="lni lni-leaf" style={{ fontSize: '2rem', color: 'var(--green-dark)' }}></i>
                <span style={{ fontSize: '1.75rem', fontWeight: 'var(--font-bold)' }}>
                  Receitas Fit
                </span>
              </div>
              
              <p style={{
                color: 'var(--gray-300)',
                marginBottom: 'var(--space-8)',
                lineHeight: 1.7,
                maxWidth: '24rem'
              }}>
                Transforme sua vida com receitas saudáveis e práticas. 
                Mais de 50 receitas fit para uma vida mais saudável e equilibrada.
              </p>
              
              <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                <SocialLink icon="lni-facebook" label="Facebook" />
                <SocialLink icon="lni-instagram" label="Instagram" />
                <SocialLink icon="lni-youtube" label="YouTube" />
                <SocialLink icon="lni-whatsapp" label="WhatsApp" />
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'var(--font-bold)',
                marginBottom: 'var(--space-8)'
              }}>
                Links Úteis
              </h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: 'var(--space-4)' }}>
                <FooterLink href="#beneficios" text="Benefícios" />
                <FooterLink href="#depoimentos" text="Depoimentos" />
                <FooterLink href="#checkout" text="Comprar" />
                <FooterLink href="#" text="Política de Privacidade" />
                <FooterLink href="#" text="Termos de Uso" />
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 'var(--font-bold)',
                marginBottom: 'var(--space-8)'
              }}>
                Contato
              </h3>
              <div>
                <ContactItem icon="lni-envelope" text="contato@receitasfit.com" />
                <ContactItem icon="lni-phone" text="(11) 99999-9999" />
                <ContactItem icon="lni-whatsapp" text="WhatsApp" />
                <ContactItem icon="lni-headphone" text="Suporte 24/7" isLast />
              </div>
            </div>
          </div>
          
          {/* Footer Bottom */}
          <div style={{
            borderTop: '1px solid var(--gray-700)',
            paddingTop: 'var(--space-8)',
            textAlign: 'center'
          }}>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem', marginBottom: 'var(--space-4)' }}>
              © 2024 Receitas Fit. Todos os direitos reservados.
            </p>
            <p style={{ color: 'var(--gray-400)', fontSize: '0.875rem' }}>
              Desenvolvido com ❤️ para sua saúde e bem-estar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ icon, label }) => (
  <a
    href="#"
    aria-label={label}
    style={{
      width: '3rem',
      height: '3rem',
      background: 'var(--gray-700)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition)',
      color: 'var(--white)',
      textDecoration: 'none'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'var(--green-dark)'
      e.currentTarget.style.transform = 'translateY(-3px)'
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'var(--gray-700)'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
  >
    <i className={`lni ${icon}`} style={{ fontSize: '1.25rem' }}></i>
  </a>
)

const FooterLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      style={{
        color: 'var(--gray-300)',
        textDecoration: 'none',
        transition: 'var(--transition)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.color = 'var(--green-dark)'
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.color = 'var(--gray-300)'
      }}
    >
      <i className="lni lni-arrow-right" style={{ fontSize: '0.75rem' }}></i>
      {text}
    </a>
  </li>
)

const ContactItem = ({ icon, text, isLast }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    marginBottom: isLast ? 0 : 'var(--space-4)'
  }}>
    <i className={`lni ${icon}`} style={{ color: 'var(--green-dark)', fontSize: '1.25rem' }}></i>
    <span style={{ color: 'var(--gray-300)' }}>{text}</span>
  </div>
)

export default Footer
