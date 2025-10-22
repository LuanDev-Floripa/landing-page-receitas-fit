import React, { useState, useEffect } from 'react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão após rolar 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Parar o pulse após 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setIsPulsing(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (!isVisible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 'var(--space-6)',
        right: 'var(--space-6)',
        zIndex: 'calc(var(--z-fixed) + 10)',
        animation: 'slideInRight 0.5s ease-out'
      }}
    >
      <button
        onClick={scrollToCheckout}
        className={isPulsing ? 'floating-cta-pulse' : ''}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
          padding: 'var(--space-4) var(--space-6)',
          background: 'linear-gradient(135deg, var(--green-dark) 0%, var(--green-medium) 100%)',
          color: 'var(--white)',
          border: 'none',
          borderRadius: 'var(--radius-full)',
          fontSize: '1rem',
          fontWeight: 'var(--font-bold)',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(45, 80, 22, 0.4)',
          transition: 'var(--transition)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 80, 22, 0.5)'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(45, 80, 22, 0.4)'
        }}
      >
        {/* Shimmer effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          animation: 'shimmer 2s infinite',
          pointerEvents: 'none'
        }}></div>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <i className="lni lni-shopping-cart" style={{ fontSize: '1.25rem' }}></i>
          <span>COMPRAR AGORA</span>
        </div>
        <div style={{ 
          position: 'relative',
          fontSize: '1.25rem', 
          fontWeight: 'var(--font-extrabold)',
          textShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}>
          R$ 47,90
        </div>
        
        {/* Discount badge */}
        <div style={{
          position: 'absolute',
          top: '-8px',
          right: '-8px',
          background: 'var(--orange-subtle)',
          color: 'var(--white)',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.75rem',
          fontWeight: 'var(--font-bold)',
          boxShadow: 'var(--shadow-lg)',
          animation: 'bounce 2s infinite'
        }}>
          -51%
        </div>
      </button>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .floating-cta-pulse {
          animation: ctaPulse 2s infinite;
        }

        @keyframes ctaPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingCTA
