import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          // Reset timer when it reaches 0
          hours = 2
          minutes = 30
          seconds = 0
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '70px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--gray-900), var(--gray-800))',
        color: 'var(--white)',
        fontSize: '2rem',
        fontWeight: 'var(--font-extrabold)',
        padding: 'var(--space-4) var(--space-5)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        minWidth: '70px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <span style={{ position: 'relative', zIndex: 1 }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <div style={{
        fontSize: '0.75rem',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--gray-600)',
        marginTop: 'var(--space-2)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {label}
      </div>
    </div>
  )

  return (
    <div style={{
      background: 'linear-gradient(135deg, #fff5f5, #ffe5e5)',
      border: '2px solid #ffcccc',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-8)',
      margin: 'var(--space-8) 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(255, 107, 107, 0.2)'
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%)',
        animation: 'rotate360 20s linear infinite',
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          background: '#ff6b6b',
          color: 'var(--white)',
          padding: 'var(--space-2) var(--space-4)',
          borderRadius: 'var(--radius-full)',
          fontSize: '0.875rem',
          fontWeight: 'var(--font-bold)',
          marginBottom: 'var(--space-4)',
          boxShadow: '0 4px 12px rgba(255, 107, 107, 0.4)',
          animation: 'pulse 2s infinite'
        }}>
          <i className="lni lni-alarm"></i>
          OFERTA POR TEMPO LIMITADO
        </div>

        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'var(--font-extrabold)',
          color: '#c92a2a',
          marginBottom: 'var(--space-6)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          ⚡ Desconto acaba em:
        </h3>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-4)',
          flexWrap: 'wrap'
        }}>
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'var(--font-bold)', 
            color: '#c92a2a',
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '20px'
          }}>
            :
          </div>
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'var(--font-bold)', 
            color: '#c92a2a',
            display: 'flex',
            alignItems: 'center',
            paddingBottom: '20px'
          }}>
            :
          </div>
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>

        <p style={{
          marginTop: 'var(--space-6)',
          fontSize: '1rem',
          color: '#c92a2a',
          fontWeight: 'var(--font-semibold)'
        }}>
          🔥 Depois volta para o preço normal de R$ 97,90!
        </p>
      </div>
    </div>
  )
}

export default CountdownTimer
