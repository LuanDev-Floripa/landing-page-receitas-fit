import React, { useState, useEffect } from 'react'

const SocialProof = () => {
  const [viewers, setViewers] = useState(247)
  const [stockLeft, setStockLeft] = useState(18)

  useEffect(() => {
    // Simulate real-time viewers
    const viewerInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2 // -2 to +2
        const newValue = prev + change
        return Math.max(200, Math.min(300, newValue)) // Keep between 200-300
      })
    }, 3000)

    // Simulate stock decrease
    const stockInterval = setInterval(() => {
      setStockLeft(prev => {
        if (Math.random() > 0.7 && prev > 5) { // 30% chance to decrease
          return prev - 1
        }
        return prev
      })
    }, 15000)

    return () => {
      clearInterval(viewerInterval)
      clearInterval(stockInterval)
    }
  }, [])

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: 'var(--space-4)',
      transform: 'translateY(-50%)',
      zIndex: 'calc(var(--z-fixed) + 2)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: '200px'
    }}>
      {/* Live Viewers */}
      <div style={{
        background: 'var(--white)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-4)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        border: '2px solid var(--green-100)',
        animation: 'slideInLeft 0.5s ease-out'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-2)'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#ff6b6b',
            animation: 'pulse 2s infinite',
            boxShadow: '0 0 10px rgba(255, 107, 107, 0.6)'
          }}></div>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 'var(--font-bold)',
            color: 'var(--gray-700)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            AO VIVO
          </span>
        </div>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'var(--font-extrabold)',
          color: 'var(--green-dark)',
          marginBottom: 'var(--space-1)'
        }}>
          {viewers}
        </div>
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--gray-600)'
        }}>
          <i className="lni lni-eye" style={{ fontSize: '0.7rem' }}></i> pessoas vendo agora
        </div>
      </div>

      {/* Stock Warning */}
      {stockLeft <= 20 && (
        <div style={{
          background: 'linear-gradient(135deg, #fff5f5, #ffe5e5)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--space-4)',
          boxShadow: '0 4px 20px rgba(255, 107, 107, 0.2)',
          border: '2px solid #ffcccc',
          animation: 'slideInLeft 0.5s ease-out 0.2s backwards'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-2)'
          }}>
            <i className="lni lni-warning" style={{
              fontSize: '1.25rem',
              color: '#ff6b6b'
            }}></i>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 'var(--font-bold)',
              color: '#c92a2a',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              ATENÇÃO
            </span>
          </div>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: 'var(--font-extrabold)',
            color: '#c92a2a',
            marginBottom: 'var(--space-1)'
          }}>
            Apenas {stockLeft}
          </div>
          <div style={{
            fontSize: '0.75rem',
            color: '#c92a2a',
            fontWeight: 'var(--font-semibold)'
          }}>
            vagas com desconto!
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          .social-proof-container {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default SocialProof
