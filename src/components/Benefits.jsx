import React, { useEffect, useRef, useState } from 'react'

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const benefits = [
    {
      icon: 'lni-heart',
      title: 'Saúde em Primeiro Lugar',
      description: 'Receitas balanceadas que nutrem seu corpo e fortalecem sua imunidade, criando uma base sólida para uma vida mais saudável.',
      color: 'green'
    },
    {
      icon: 'lni-clock',
      title: 'Preparo Rápido',
      description: 'Receitas práticas que você pode fazer em menos de 30 minutos, perfeitas para quem tem uma rotina corrida mas não quer abrir mão da saúde.',
      color: 'orange'
    },
    {
      icon: 'lni-leaf',
      title: 'Ingredientes Naturais',
      description: 'Apenas ingredientes frescos e naturais, sem conservantes ou aditivos químicos. Sua família merece o melhor.',
      color: 'green'
    },
    {
      icon: 'lni-users',
      title: 'Para Toda Família',
      description: 'Receitas que agradam desde crianças até adultos, unindo a família na mesa com refeições nutritivas e saborosas.',
      color: 'orange'
    },
    {
      icon: 'lni-target',
      title: 'Resultados Comprovados',
      description: 'Mais de 10.000 pessoas já transformaram suas vidas com essas receitas. Veja os depoimentos reais de quem mudou de vida.',
      color: 'green'
    },
    {
      icon: 'lni-mobile',
      title: 'Acesso Imediato',
      description: 'Baixe agora e comece a cozinhar hoje mesmo, em qualquer dispositivo. Acesso vitalício para sempre.',
      color: 'orange'
    }
  ]

  return (
    <section id="beneficios" ref={sectionRef} style={{ padding: 'var(--space-24) 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-20)' }} className="text-center">
          <div className="badge" style={{ marginBottom: 'var(--space-6)' }}>
            <i className="lni lni-star"></i>
            Por que escolher o Receitas Fit?
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'var(--font-extrabold)',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.1
          }}>
            Por que 10.000+ pessoas escolheram{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              o Receitas Fit?
            </span>
            <br />
            <span style={{ fontSize: '0.6em', color: 'var(--orange-subtle)' }}>
              🔥 E estão tendo resultados REAIS!
            </span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            <strong>Não é mágica, é método!</strong> Descubra os 6 pilares que vão transformar seu corpo, 
            sua energia e sua autoestima de forma definitiva. <strong>Resultados garantidos ou seu dinheiro de volta!</strong>
          </p>
        </div>

        {/* Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(auto-fit, minmax(350px, 1fr))' : '1fr',
          gap: 'var(--space-8)'
        }}>
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index} 
              {...benefit} 
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats Box */}
        <div style={{
          marginTop: 'var(--space-20)',
          background: 'linear-gradient(135deg, var(--green-50), var(--orange-50))',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-16)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="text-center" style={{ marginBottom: 'var(--space-12)' }}>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 'var(--font-bold)',
                color: 'var(--gray-900)',
                marginBottom: 'var(--space-4)'
              }}>
                Números que comprovam nossa eficácia
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '1.125rem' }}>
                Mais de 10.000 pessoas já transformaram suas vidas com nossas receitas
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr',
              gap: 'var(--space-8)',
              textAlign: 'center'
            }}>
              <StatItem number="10.000+" label="Pessoas transformadas" />
              <StatItem number="50+" label="Receitas exclusivas" />
              <StatItem number="98%" label="Satisfação dos clientes" />
              <StatItem number="24h" label="Suporte disponível" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const BenefitCard = ({ icon, title, description, color, delay, isVisible }) => (
  <div 
    className={isVisible ? 'animate-fade-in-up' : ''}
    style={{
      background: 'linear-gradient(135deg, var(--white), var(--gray-50))',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-10)',
      textAlign: 'center',
      transition: 'var(--transition)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--gray-100)',
      position: 'relative',
      overflow: 'hidden',
      animationDelay: `${delay}s`
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
      e.currentTarget.style.boxShadow = 'var(--shadow-2xl)'
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0) scale(1)'
      e.currentTarget.style.boxShadow = 'var(--shadow-md)'
    }}
  >
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: color === 'green' 
        ? 'linear-gradient(135deg, var(--green-dark), var(--green-medium))'
        : 'linear-gradient(135deg, var(--orange-subtle), var(--orange-500))'
    }}></div>
    
    <div style={{
      width: '5rem',
      height: '5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto var(--space-6)',
      position: 'relative',
      background: color === 'green'
        ? 'linear-gradient(135deg, var(--green-100), var(--green-200))'
        : 'linear-gradient(135deg, var(--orange-100), var(--orange-200))'
    }}>
      <i className={`lni ${icon}`} style={{
        fontSize: '2rem',
        color: color === 'green' ? 'var(--green-dark)' : 'var(--orange-subtle)'
      }}></i>
      <div style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: color === 'green' ? 'var(--orange-subtle)' : 'var(--green-dark)'
      }}>
        <i className="lni lni-checkmark" style={{ fontSize: '0.75rem', color: 'var(--white)' }}></i>
      </div>
    </div>
    
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: 'var(--font-bold)',
      color: 'var(--gray-900)',
      marginBottom: 'var(--space-4)'
    }}>
      {title}
    </h3>
    
    <p style={{
      color: 'var(--gray-600)',
      lineHeight: 1.7,
      marginBottom: 'var(--space-6)'
    }}>
      {description}
    </p>
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontWeight: 'var(--font-semibold)',
      color: color === 'green' ? 'var(--green-dark)' : 'var(--orange-subtle)'
    }}>
      <i className="lni lni-arrow-right"></i>
      <span>Saiba mais</span>
    </div>
  </div>
)

const StatItem = ({ number, label }) => (
  <div style={{
    padding: 'var(--space-6)',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 'var(--radius-xl)',
    backdropFilter: 'blur(10px)',
    transition: 'var(--transition)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)'
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)'
    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)'
  }}
  >
    <div style={{
      fontSize: '3rem',
      fontWeight: 'var(--font-extrabold)',
      color: 'var(--green-dark)',
      marginBottom: 'var(--space-2)',
      lineHeight: 1
    }}>
      {number}
    </div>
    <div style={{ color: 'var(--gray-600)', fontWeight: 'var(--font-medium)' }}>
      {label}
    </div>
  </div>
)

export default Benefits
