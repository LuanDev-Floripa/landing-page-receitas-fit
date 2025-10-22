import React, { useEffect, useRef, useState } from 'react'

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const testimonials = [
    {
      quote: "Nunca imaginei que seria tão fácil comer saudável! As receitas são deliciosas e práticas. Perdi 8kg em 2 meses sem sofrimento. Minha família toda adorou!",
      name: "Maria Silva",
      role: "Professora, 34 anos",
      result: "Perdeu 8kg em 2 meses",
      color: "green"
    },
    {
      quote: "Minha família toda adorou! As crianças nem perceberam que estavam comendo vegetais. Mudou completamente nossa rotina alimentar. Recomendo para todos!",
      name: "João Santos",
      role: "Engenheiro, 42 anos",
      result: "Família unida na mesa",
      color: "orange"
    },
    {
      quote: "Como médica, recomendo este ebook para todos os meus pacientes. As receitas são nutricionalmente balanceadas e saborosas. Excelente qualidade!",
      name: "Ana Costa",
      role: "Médica, 29 anos",
      result: "Recomendação médica",
      color: "green"
    }
  ]

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section 
      id="depoimentos" 
      ref={sectionRef}
      style={{ 
        padding: 'var(--space-24) 0',
        background: 'linear-gradient(135deg, var(--gray-50), var(--white))'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-20)' }} className="text-center">
          <div className="badge" style={{ marginBottom: 'var(--space-6)' }}>
            <i className="lni lni-quotation"></i>
            Depoimentos Reais
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'var(--font-extrabold)',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.1
          }}>
            ❤️ Veja quem{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              EMAGRECEU DE VERDADE
            </span>
            <br />
            <span style={{ fontSize: '0.6em', color: 'var(--orange-subtle)' }}>
              com as receitas do Receitas Fit!
            </span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            <strong>Resultados REAIS de pessoas REAIS!</strong> Veja como elas perderam peso, 
            ganharam energia e transformaram completamente sua relação com a comida. 
            <strong> A próxima história de sucesso pode ser a SUA!</strong> 💪
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(auto-fit, minmax(350px, 1fr))' : '1fr',
          gap: 'var(--space-8)'
        }}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              {...testimonial} 
              delay={index * 0.1}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA Box */}
        <div style={{
          marginTop: 'var(--space-20)',
          background: 'linear-gradient(135deg, var(--white), var(--gray-50))',
          borderRadius: 'var(--radius-2xl)',
          padding: 'var(--space-16)',
          boxShadow: 'var(--shadow-2xl)',
          maxWidth: '64rem',
          margin: 'var(--space-20) auto 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }} className="text-center">
            <div style={{
              width: '5rem',
              height: '5rem',
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-8)',
              animation: 'pulse 2s infinite'
            }}>
              <i className="lni lni-heart" style={{ color: 'var(--white)', fontSize: '2rem' }}></i>
            </div>
            
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 'var(--font-extrabold)',
              color: 'var(--gray-900)',
              marginBottom: 'var(--space-6)',
              lineHeight: 1.1
            }}>
              Pronto para transformar sua vida?
            </h3>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-10)',
              lineHeight: 1.7,
              maxWidth: '48rem',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Junte-se a mais de 10.000 pessoas que já descobriram o segredo de uma alimentação saudável e saborosa. Sua transformação começa agora!
            </p>
            
            <button className="btn btn-primary btn-xl" onClick={scrollToCheckout}>
              <i className="lni lni-shopping-cart"></i>
              Comprar Agora - R$ 47,90
            </button>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-4)',
              color: 'var(--gray-500)',
              fontSize: '0.875rem',
              flexWrap: 'wrap',
              marginTop: 'var(--space-6)'
            }}>
              <CTAFeature icon="lni-shield" text="Garantia de 7 dias" />
              <CTAFeature icon="lni-download" text="Acesso imediato" />
              <CTAFeature icon="lni-mobile" text="Qualquer dispositivo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ quote, name, role, result, color, delay, isVisible }) => (
  <div 
    className={isVisible ? 'animate-fade-in-up' : ''}
    style={{
      background: 'var(--white)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-10)',
      boxShadow: 'var(--shadow-lg)',
      transition: 'var(--transition)',
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
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
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
    
    <div style={{ display: 'flex', gap: 'var(--space-1)', marginBottom: 'var(--space-6)' }}>
      {[...Array(5)].map((_, i) => (
        <i key={i} className="lni lni-star-filled" style={{ color: 'var(--orange-subtle)', fontSize: '1.25rem' }}></i>
      ))}
    </div>
    
    <p style={{
      color: 'var(--gray-700)',
      marginBottom: 'var(--space-8)',
      lineHeight: 1.7,
      fontSize: '1.125rem',
      fontStyle: 'italic'
    }}>
      "{quote}"
    </p>
    
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
      <div style={{
        width: '4rem',
        height: '4rem',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: color === 'green'
          ? 'linear-gradient(135deg, var(--green-100), var(--green-200))'
          : 'linear-gradient(135deg, var(--orange-100), var(--orange-200))'
      }}>
        <i className="lni lni-user" style={{
          fontSize: '1.5rem',
          color: color === 'green' ? 'var(--green-dark)' : 'var(--orange-subtle)'
        }}></i>
        <div style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '1.25rem',
          height: '1.25rem',
          borderRadius: '50%',
          border: '2px solid var(--white)',
          background: color === 'green' ? 'var(--green-dark)' : 'var(--orange-subtle)'
        }}></div>
      </div>
      
      <div>
        <div style={{
          fontWeight: 'var(--font-bold)',
          color: 'var(--gray-900)',
          fontSize: '1.125rem'
        }}>
          {name}
        </div>
        <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>
          {role}
        </div>
        <div style={{
          fontSize: '0.875rem',
          fontWeight: 'var(--font-medium)',
          color: color === 'green' ? 'var(--green-dark)' : 'var(--orange-subtle)'
        }}>
          {result}
        </div>
      </div>
    </div>
  </div>
)

const CTAFeature = ({ icon, text }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-2)'
  }}>
    <i className={`lni ${icon}`} style={{ color: 'var(--green-dark)' }}></i>
    <span>{text}</span>
  </div>
)

export default Testimonials
