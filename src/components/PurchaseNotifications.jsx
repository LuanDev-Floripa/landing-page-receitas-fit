import React, { useState, useEffect } from 'react'

const PurchaseNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [nextId, setNextId] = useState(0)

  const purchaseData = [
    { name: 'Maria S.', location: 'São Paulo - SP', time: 'agora' },
    { name: 'João P.', location: 'Rio de Janeiro - RJ', time: '2 minutos atrás' },
    { name: 'Ana C.', location: 'Belo Horizonte - MG', time: '5 minutos atrás' },
    { name: 'Pedro L.', location: 'Curitiba - PR', time: '8 minutos atrás' },
    { name: 'Juliana M.', location: 'Brasília - DF', time: '12 minutos atrás' },
    { name: 'Carlos R.', location: 'Salvador - BA', time: '15 minutos atrás' },
    { name: 'Fernanda S.', location: 'Fortaleza - CE', time: '18 minutos atrás' },
    { name: 'Roberto A.', location: 'Porto Alegre - RS', time: '22 minutos atrás' },
    { name: 'Patrícia F.', location: 'Recife - PE', time: '25 minutos atrás' },
    { name: 'Lucas O.', location: 'Manaus - AM', time: '30 minutos atrás' }
  ]

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchaseData[Math.floor(Math.random() * purchaseData.length)]
      const id = nextId
      setNextId(prev => prev + 1)

      const newNotification = {
        id,
        ...randomPurchase
      }

      setNotifications(prev => [...prev, newNotification])

      // Remove notification after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id))
      }, 5000)
    }

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(showNotification, 3000)

    // Show new notification every 8-15 seconds
    const interval = setInterval(() => {
      showNotification()
    }, Math.random() * 7000 + 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [nextId])

  return (
    <div style={{
      position: 'fixed',
      bottom: 'var(--space-6)',
      left: 'var(--space-6)',
      zIndex: 'calc(var(--z-fixed) + 5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      maxWidth: '320px'
    }}>
      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-4)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            border: '2px solid var(--green-100)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            animation: 'slideInLeft 0.5s ease-out, fadeOut 0.5s ease-out 4.5s forwards',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Progress bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '3px',
            background: 'linear-gradient(90deg, var(--green-dark), var(--green-medium))',
            animation: 'progress 5s linear forwards',
            transformOrigin: 'left'
          }}></div>

          {/* Icon */}
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--green-100), var(--green-200))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative'
          }}>
            <i className="lni lni-user" style={{ 
              fontSize: '1.5rem', 
              color: 'var(--green-dark)' 
            }}></i>
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              background: 'var(--orange-subtle)',
              border: '2px solid var(--white)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <i className="lni lni-checkmark" style={{ 
                fontSize: '0.6rem', 
                color: 'var(--white)',
                fontWeight: 'var(--font-bold)'
              }}></i>
            </div>
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontWeight: 'var(--font-bold)',
              color: 'var(--gray-900)',
              fontSize: '0.95rem',
              marginBottom: 'var(--space-1)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}>
              <span>{notification.name}</span>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--white)',
                background: 'var(--green-dark)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 'var(--font-semibold)'
              }}>
                COMPROU
              </span>
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: 'var(--gray-600)',
              marginBottom: 'var(--space-1)'
            }}>
              <i className="lni lni-map-marker" style={{ fontSize: '0.75rem' }}></i> {notification.location}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--gray-500)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-1)'
            }}>
              <i className="lni lni-timer" style={{ fontSize: '0.7rem' }}></i>
              {notification.time}
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(-20px);
          }
        }

        @keyframes progress {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}

export default PurchaseNotifications
