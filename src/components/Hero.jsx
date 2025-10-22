import React from 'react'

const Hero = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToBenefits = () => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section style={{
      padding: '8rem 0 6rem',
      background: 'linear-gradient(135deg, var(--gray-50) 0%, var(--white) 50%, var(--green-50) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: 'var(--space-16)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Hero Text */}
          <div className="animate-fade-in-left" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div className="badge animate-glow">
              <i className="lni lni-star-filled"></i>
              ⚡ 10.000+ pessoas já transformaram suas vidas!
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 'var(--font-extrabold)',
              color: 'var(--gray-900)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em'
            }}>
              Emagreça de forma{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}>
                saudável e deliciosa
              </span>
              <br />
              <span style={{ fontSize: '0.7em', color: 'var(--gray-700)' }}>
                com 50+ receitas fit testadas e aprovadas! 🥗
              </span>
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              lineHeight: 1.7,
              maxWidth: '600px'
            }}>
              <strong style={{ color: 'var(--green-dark)' }}>Pare de sofrer com dietas restritivas!</strong> 
              {' '}Descubra receitas práticas, gostosas e que realmente funcionam para perder peso sem passar fome. 
              <strong> Resultados comprovados em até 30 dias!</strong>
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
              gap: 'var(--space-4)',
              marginBottom: 'var(--space-8)'
            }}>
              <button className="btn btn-primary btn-lg animate-glow" onClick={scrollToCheckout}>
                <i className="lni lni-shopping-cart"></i>
                🔥 QUERO EMAGRECER AGORA
              </button>
              
              <button className="btn btn-secondary btn-lg" onClick={scrollToBenefits}>
                <i className="lni lni-arrow-down"></i>
                Ver Como Funciona
              </button>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr',
              gap: 'var(--space-4)',
              fontSize: '0.875rem',
              color: 'var(--gray-600)'
            }}>
              <HeroFeature icon="lni-shield" text="Garantia de 7 dias" />
              <HeroFeature icon="lni-download" text="Acesso imediato" />
              <HeroFeature icon="lni-mobile" text="Disponível em qualquer dispositivo" />
            </div>
          </div>
          
          {/* Product Preview */}
          <div className="animate-fade-in-right">
            <div style={{
              position: 'relative',
              background: 'var(--white)',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-2xl)',
              padding: 'var(--space-8)',
              transform: 'rotate(2deg)',
              transition: 'var(--transition)',
              border: '1px solid var(--gray-100)',
              maxWidth: '400px',
              margin: '0 auto'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)'
              e.currentTarget.style.boxShadow = '0 30px 60px -15px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'rotate(2deg)'
              e.currentTarget.style.boxShadow = 'var(--shadow-2xl)'
            }}
            >
              <div className="animate-heartbeat" style={{
                position: 'absolute',
                top: 'calc(-1 * var(--space-4))',
                right: 'calc(-1 * var(--space-4))',
                background: 'linear-gradient(135deg, #ff6b6b, #ee5a6f)',
                color: 'var(--white)',
                padding: 'var(--space-2) var(--space-4)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 'var(--font-bold)',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                animation: 'heartbeat 1.5s infinite, glow 2s infinite'
              }}>
                🔥 MAIS VENDIDO
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '8rem',
                  height: '10rem',
                  background: 'linear-gradient(135deg, var(--green-100), var(--green-200))',
                  borderRadius: 'var(--radius-xl)',
                  margin: '0 auto var(--space-4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                    animation: 'shimmer 2s infinite'
                  }}></div>
                  <i className="lni lni-book" style={{
                    fontSize: '3rem',
                    color: 'var(--green-dark)',
                    position: 'relative',
                    zIndex: 1
                  }}></i>
                </div>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'var(--font-bold)',
                  color: 'var(--gray-900)',
                  marginBottom: 'var(--space-2)'
                }}>
                  Receitas Fit
                </h3>
                
                <p style={{
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)',
                  fontSize: '0.95rem'
                }}>
                  Re-educa Viva Saudável
                </p>
                
                <div style={{
                  fontSize: '0.875rem',
                  color: 'var(--gray-600)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <ProductDetail label="Páginas:" value="120+" />
                  <ProductDetail label="Receitas:" value="50+" />
                  <ProductDetail label="Formato:" value="PDF" />
                </div>
                
                <div style={{
                  paddingTop: 'var(--space-4)',
                  borderTop: '2px solid var(--gray-100)'
                }}>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 'var(--font-extrabold)',
                    color: 'var(--green-dark)',
                    marginBottom: 'var(--space-1)'
                  }}>
                    R$ 47,90
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'var(--gray-500)',
                    textDecoration: 'line-through'
                  }}>
                    R$ 97,90
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const HeroFeature = ({ icon, text }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    padding: 'var(--space-2)',
    background: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 'var(--radius-lg)',
    backdropFilter: 'blur(10px)',
    transition: 'var(--transition)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)'
    e.currentTarget.style.transform = 'translateY(-2px)'
    e.currentTarget.style.boxShadow = 'var(--shadow-md)'
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'
    e.currentTarget.style.transform = 'translateY(0)'
    e.currentTarget.style.boxShadow = 'none'
  }}
  >
    <i className={`lni ${icon}`} style={{ color: 'var(--green-dark)', fontSize: '1.125rem' }}></i>
    <span>{text}</span>
  </div>
)

const ProductDetail = ({ label, value }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: 'var(--space-1) 0',
    borderBottom: '1px solid var(--gray-100)'
  }}>
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
)

export default Hero
