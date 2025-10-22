import React, { useState } from 'react'
import CountdownTimer from './CountdownTimer'

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    
    // Simulate processing
    setTimeout(() => {
      showSuccessModal()
      setIsSubmitting(false)
    }, 2000)
  }

  const showSuccessModal = () => {
    const modal = document.createElement('div')
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--z-modal);
    `
    modal.innerHTML = `
      <div style="background: var(--white); padding: var(--space-12); border-radius: var(--radius-2xl); box-shadow: var(--shadow-2xl); text-align: center; max-width: 400px; width: 90%; margin: var(--space-4);">
        <div style="width: 4rem; height: 4rem; background: var(--green-dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-6);">
          <i class="lni lni-checkmark" style="color: var(--white); font-size: 2rem;"></i>
        </div>
        <h3 style="font-size: 1.5rem; font-weight: var(--font-bold); color: var(--gray-900); margin-bottom: var(--space-4);">
          Redirecionando para o pagamento...
        </h3>
        <p style="color: var(--gray-600); margin-bottom: var(--space-8);">
          Em um ambiente real, aqui seria integrado com o Hotmart para processar o pagamento.
        </p>
        <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">
          Entendi
        </button>
      </div>
    `
    document.body.appendChild(modal)
  }

  return (
    <section 
      id="checkout" 
      style={{ 
        padding: 'var(--space-24) 0',
        background: 'linear-gradient(135deg, var(--gray-50), var(--white))'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: 'var(--space-20)' }} className="text-center">
          <div className="badge" style={{ marginBottom: 'var(--space-6)' }}>
            <i className="lni lni-lock"></i>
            Compra Segura
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 'var(--font-extrabold)',
            color: 'var(--gray-900)',
            marginBottom: 'var(--space-6)',
            lineHeight: 1.1
          }}>
            ⚡ Última chance!{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              -51% DE DESCONTO
            </span>
            <br />
            <span style={{ fontSize: '0.6em', color: 'var(--orange-subtle)' }}>
              🔥 Apenas hoje: De R$ 97,90 por R$ 47,90
            </span>
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--gray-600)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            <strong style={{ color: 'var(--orange-subtle)' }}>⏰ ATENÇÃO:</strong> Esse desconto especial pode acabar a qualquer momento! 
            Garanta agora seu acesso <strong>IMEDIATO</strong> e comece sua transformação em menos de 5 minutos! 
            <strong> + Garantia total de 7 dias!</strong>
          </p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: 'var(--space-16)'
        }}>
          {/* Form */}
          <div style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-12)',
            boxShadow: 'var(--shadow-2xl)',
            border: '1px solid var(--gray-100)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))'
            }}></div>
            
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 'var(--font-bold)',
              color: 'var(--gray-900)',
              marginBottom: 'var(--space-8)',
              textAlign: 'center'
            }}>
              Dados para Compra
            </h3>
            
            <form onSubmit={handleSubmit}>
              <FormGroup label="Nome Completo *" type="text" placeholder="Seu nome completo" required />
              <FormGroup label="E-mail *" type="email" placeholder="seu@email.com" required />
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-8)',
                marginBottom: 'var(--space-8)'
              }}>
                <FormGroup label="Telefone *" type="tel" placeholder="(11) 99999-9999" required />
                <FormGroup label="CPF *" type="text" placeholder="000.000.000-00" required />
              </div>

              <div style={{ marginBottom: 'var(--space-8)' }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 'var(--font-semibold)',
                  color: 'var(--gray-700)',
                  marginBottom: 'var(--space-3)'
                }}>
                  Forma de Pagamento *
                </label>
                
                <PaymentOption
                  value="credit"
                  icon="lni-credit-cards"
                  name="Cartão de Crédito"
                  desc="Visa, Mastercard, Elo"
                  checked={paymentMethod === 'credit'}
                  onChange={() => setPaymentMethod('credit')}
                />
                <PaymentOption
                  value="pix"
                  icon="lni-qr-code"
                  name="PIX"
                  desc="Aprovação imediata"
                  checked={paymentMethod === 'pix'}
                  onChange={() => setPaymentMethod('pix')}
                />
                <PaymentOption
                  value="boleto"
                  icon="lni-file"
                  name="Boleto Bancário"
                  desc="Aprovação em até 3 dias"
                  checked={paymentMethod === 'boleto'}
                  onChange={() => setPaymentMethod('boleto')}
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-xl" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="lni lni-spinner-arrow animate-spin"></i>
                    Processando...
                  </>
                ) : (
                  <>
                    <i className="lni lni-lock"></i>
                    Finalizar Compra - R$ 47,90
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary & Guarantee */}
          <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
            <OrderSummary />
            <GuaranteeBox />
          </div>
        </div>
      </div>
    </section>
  )
}

const FormGroup = ({ label, type, placeholder, required }) => (
  <div style={{ marginBottom: 'var(--space-8)' }}>
    <label style={{
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 'var(--font-semibold)',
      color: 'var(--gray-700)',
      marginBottom: 'var(--space-3)'
    }}>
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      style={{
        width: '100%',
        padding: 'var(--space-4) var(--space-5)',
        border: '2px solid var(--gray-200)',
        borderRadius: 'var(--radius-lg)',
        fontFamily: 'var(--font-family)',
        fontSize: '1rem',
        transition: 'var(--transition)',
        background: 'var(--gray-50)'
      }}
      onFocus={(e) => {
        e.target.style.outline = 'none'
        e.target.style.borderColor = 'var(--green-dark)'
        e.target.style.background = 'var(--white)'
      }}
      onBlur={(e) => {
        e.target.style.borderColor = 'var(--gray-200)'
        e.target.style.background = 'var(--gray-50)'
      }}
    />
  </div>
)

const PaymentOption = ({ value, icon, name, desc, checked, onChange }) => (
  <label style={{
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--space-6)',
    border: `2px solid ${checked ? 'var(--green-dark)' : 'var(--gray-200)'}`,
    borderRadius: 'var(--radius-xl)',
    cursor: 'pointer',
    transition: 'var(--transition)',
    background: checked ? 'var(--white)' : 'var(--gray-50)',
    marginBottom: 'var(--space-4)'
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.borderColor = 'var(--green-dark)'
    e.currentTarget.style.background = 'var(--white)'
  }}
  onMouseOut={(e) => {
    if (!checked) {
      e.currentTarget.style.borderColor = 'var(--gray-200)'
      e.currentTarget.style.background = 'var(--gray-50)'
    }
  }}
  >
    <input
      type="radio"
      name="paymentMethod"
      value={value}
      checked={checked}
      onChange={onChange}
      style={{ marginRight: 'var(--space-4)', transform: 'scale(1.2)', cursor: 'pointer' }}
    />
    <i className={`lni ${icon}`} style={{ fontSize: '2rem', color: 'var(--green-dark)', marginRight: 'var(--space-4)' }}></i>
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 'var(--font-semibold)', fontSize: '1.125rem', marginBottom: 'var(--space-1)' }}>
        {name}
      </div>
      <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
        {desc}
      </div>
    </div>
  </label>
)

const OrderSummary = () => (
  <div style={{
    background: 'var(--white)',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-10)',
    boxShadow: 'var(--shadow-lg)',
    border: '1px solid var(--gray-100)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(135deg, var(--green-dark), var(--green-medium))'
    }}></div>
    
    <h3 style={{
      fontSize: '1.5rem',
      fontWeight: 'var(--font-bold)',
      color: 'var(--gray-900)',
      marginBottom: 'var(--space-8)',
      textAlign: 'center'
    }}>
      Seu Pedido
    </h3>
    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      marginBottom: 'var(--space-8)',
      padding: 'var(--space-6)',
      background: 'var(--gray-50)',
      borderRadius: 'var(--radius-xl)'
    }}>
      <div style={{
        width: '5rem',
        height: '6rem',
        background: 'linear-gradient(135deg, var(--green-100), var(--green-200))',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <i className="lni lni-book" style={{ fontSize: '2rem', color: 'var(--green-dark)' }}></i>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 'var(--font-bold)', color: 'var(--gray-900)', fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>
          Receitas Fit
        </div>
        <div style={{ color: 'var(--gray-600)', marginBottom: 'var(--space-4)' }}>
          Re-educa Viva Saudável
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'var(--font-bold)', color: 'var(--green-dark)' }}>
            R$ 47,90
          </span>
          <span style={{ fontSize: '1rem', color: 'var(--gray-500)', textDecoration: 'line-through' }}>
            R$ 97,90
          </span>
          <span style={{ background: 'var(--orange-subtle)', color: 'var(--white)', padding: 'var(--space-1) var(--space-3)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 'var(--font-bold)' }}>
            -51%
          </span>
        </div>
      </div>
    </div>

    <div style={{ borderTop: '2px solid var(--gray-100)', paddingTop: 'var(--space-6)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'var(--font-bold)', color: 'var(--gray-900)' }}>
        <span>Total:</span>
        <span style={{ color: 'var(--green-dark)' }}>R$ 47,90</span>
      </div>
      <div style={{ textAlign: 'center', marginTop: 'var(--space-4)', color: 'var(--gray-500)', fontSize: '0.875rem' }}>
        Você economizou R$ 50,00
      </div>
    </div>
  </div>
)

const GuaranteeBox = () => (
  <div style={{
    background: 'linear-gradient(135deg, var(--green-50), var(--orange-50))',
    borderRadius: 'var(--radius-2xl)',
    padding: 'var(--space-10)',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: 'var(--font-bold)',
        color: 'var(--gray-900)',
        marginBottom: 'var(--space-8)',
        textAlign: 'center'
      }}>
        Sua Garantia
      </h3>
      
      <GuaranteeItem icon="lni-shield" title="Garantia de 7 dias" desc="Teste sem riscos" />
      <GuaranteeItem icon="lni-download" title="Acesso imediato" desc="Após o pagamento" />
      <GuaranteeItem icon="lni-mobile" title="Qualquer dispositivo" desc="Acesso vitalício" />
      <GuaranteeItem icon="lni-headphone" title="Suporte 24/7" desc="Sempre disponível" isLast />
    </div>
  </div>
)

const GuaranteeItem = ({ icon, title, desc, isLast }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-4)',
    padding: 'var(--space-4)',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 'var(--radius-lg)',
    backdropFilter: 'blur(10px)',
    marginBottom: isLast ? 0 : 'var(--space-6)'
  }}>
    <div style={{
      width: '3rem',
      height: '3rem',
      background: 'var(--green-dark)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}>
      <i className={`lni ${icon}`} style={{ color: 'var(--white)', fontSize: '1.25rem' }}></i>
    </div>
    <div>
      <div style={{ fontWeight: 'var(--font-semibold)', color: 'var(--gray-900)', marginBottom: 'var(--space-1)' }}>
        {title}
      </div>
      <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
        {desc}
      </div>
    </div>
  </div>
)

export default Checkout
