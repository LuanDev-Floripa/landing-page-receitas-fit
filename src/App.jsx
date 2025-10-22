import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import PurchaseNotifications from './components/PurchaseNotifications'
import SocialProof from './components/SocialProof'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Checkout />
      <Footer />
      
      {/* Floating Elements */}
      <FloatingCTA />
      <PurchaseNotifications />
      <SocialProof />
    </div>
  )
}

export default App
