import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          
          // Add/remove scrolled class
          setIsScrolled(currentScrollY > 100)
          
          // Hide/show header on scroll
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
          
          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-fixed)',
        transition: 'var(--transition)',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid var(--gray-200)' : '1px solid rgba(255, 255, 255, 0.1)',
        padding: isScrolled ? 'var(--space-2) 0' : 'var(--space-4) 0',
        boxShadow: isScrolled ? 'var(--shadow-lg)' : 'none',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a 
            href="#" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-2)', 
              textDecoration: 'none',
              transition: 'var(--transition)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <i className="lni lni-leaf" style={{ 
              fontSize: '2rem', 
              color: 'var(--green-dark)',
              transition: 'var(--transition)'
            }}></i>
            <span style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'var(--font-bold)', 
              color: 'var(--green-dark)',
              letterSpacing: '-0.025em'
            }}>
              Receitas Fit
            </span>
          </a>
          
          <nav 
            style={{
              display: window.innerWidth >= 640 ? 'flex' : 'none',
              alignItems: 'center',
              gap: 'var(--space-8)'
            }}
          >
            <a href="#beneficios" style={navLinkStyle}>Benefícios</a>
            <a href="#depoimentos" style={navLinkStyle}>Depoimentos</a>
            <a href="#checkout" style={navLinkStyle}>Comprar</a>
          </nav>

          <button
            onClick={toggleMobileMenu}
            style={{
              display: window.innerWidth >= 640 ? 'none' : 'block',
              background: 'none',
              border: 'none',
              color: 'var(--gray-600)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'var(--transition)',
              padding: 'var(--space-2)',
              borderRadius: 'var(--radius-md)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--green-dark)'
              e.currentTarget.style.background = 'var(--gray-100)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--gray-600)'
              e.currentTarget.style.background = 'none'
            }}
            aria-label="Menu"
          >
            <i className="lni lni-menu"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'var(--white)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--space-8)',
            zIndex: 'calc(var(--z-fixed) + 1)'
          }}
        >
          <button
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              top: 'var(--space-4)',
              right: 'var(--space-4)',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--gray-600)'
            }}
          >
            <i className="lni lni-close"></i>
          </button>
          <a href="#beneficios" onClick={closeMobileMenu} style={mobileNavLinkStyle}>Benefícios</a>
          <a href="#depoimentos" onClick={closeMobileMenu} style={mobileNavLinkStyle}>Depoimentos</a>
          <a href="#checkout" onClick={closeMobileMenu} style={mobileNavLinkStyle}>Comprar</a>
        </div>
      )}
    </header>
  )
}

const navLinkStyle = {
  color: 'var(--gray-600)',
  textDecoration: 'none',
  fontWeight: 'var(--font-medium)',
  fontSize: '0.95rem',
  transition: 'var(--transition)',
  position: 'relative'
}

const mobileNavLinkStyle = {
  fontSize: '1.5rem',
  textAlign: 'center',
  color: 'var(--gray-600)',
  textDecoration: 'none',
  fontWeight: 'var(--font-medium)'
}

export default Header
