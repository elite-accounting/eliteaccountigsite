import React, { useEffect, useRef, useState } from 'react'
import { CheckmarkIcon } from '../components/Icons.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const Pricing = () => {
  const pricingCarouselRef = useRef(null)
  const [activePricingIndex, setActivePricingIndex] = useState(0)
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [plansRef, plansVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })

  const plans = [
    { name: 'Starter', price: '$499', period: 'per month', description: 'Perfect for small businesses', features: ['Monthly bookkeeping', 'Basic tax preparation', 'Quarterly financial reports', 'Email support', 'Cloud-based access'], buttonText: 'Get Started', popular: false },
    { name: 'Professional', price: '$999', period: 'per month', description: 'Best for growing businesses', features: ['Full-service bookkeeping', 'Advanced tax planning', 'Monthly financial reports', 'Priority support', 'Dedicated account manager', 'Custom reporting'], buttonText: 'Get Started', popular: true },
    { name: 'Enterprise', price: 'Custom', period: 'pricing', description: 'For large organizations', features: ['Comprehensive accounting suite', 'Strategic tax consulting', 'Real-time financial dashboards', '24/7 priority support', 'Dedicated team', 'Custom integrations'], buttonText: 'Contact Sales', popular: false },
  ]

  useEffect(() => {
    const carousel = pricingCarouselRef.current
    if (!carousel) return
    const handleScroll = () => {
      const cards = carousel.children
      const containerWidth = carousel.clientWidth
      const scrollLeft = carousel.scrollLeft
      const viewportCenter = scrollLeft + containerWidth / 2
      let minDistance = Infinity
      let closestIndex = 0
      Array.from(cards).forEach((card, index) => {
        const cardElement = card
        const cardLeft = cardElement.offsetLeft
        const cardWidth = cardElement.offsetWidth
        const cardCenter = cardLeft + cardWidth / 2
        const distance = Math.abs(cardCenter - viewportCenter)
        if (distance < minDistance) { minDistance = distance; closestIndex = index }
      })
      setActivePricingIndex(closestIndex)
    }
    carousel.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => { carousel.removeEventListener('scroll', handleScroll) }
  }, [])

  const scrollToPricingCard = (index) => {
    const carousel = pricingCarouselRef.current
    if (!carousel) return
    const cards = carousel.children
    const targetCard = cards[index]
    if (!targetCard) return
    const cardLeft = targetCard.offsetLeft
    const cardWidth = targetCard.offsetWidth
    const containerWidth = carousel.clientWidth
    const scrollPosition = cardLeft - (containerWidth - cardWidth) / 2
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headingRef}
          className="text-center mb-4"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary inline-block pb-4 relative" style={{ borderBottom: '3px solid #2F4F4F', paddingBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>Pricing Plans</h2>
        </div>
        <p 
          className="text-text-secondary text-center mb-12 font-light"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          Choose the plan that fits your business needs
        </p>
        <div 
          ref={plansRef}
          className="hidden md:grid md:grid-cols-3 gap-6"
          style={{
            opacity: plansVisible ? 1 : 0,
            transform: plansVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
          }}
        >
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white border ${plan.popular ? 'border-primary shadow-lg' : 'border-secondary'} p-8 flex flex-col`}>
              {plan.popular && (<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><span className="bg-primary text-white px-4 py-1 text-sm font-light">Most Popular</span></div>)}
              <div className="mb-6">
                <h3 className="text-2xl font-light text-text-primary mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-light text-text-primary">{plan.price}</span>
                  {plan.period !== 'pricing' && (<span className="text-text-secondary font-light ml-2">{plan.period}</span>)}
                </div>
                <p className="text-text-secondary font-light text-sm">{plan.description}</p>
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-primary mr-2 flex-shrink-0 mt-0.5"><CheckmarkIcon /></span>
                    <span className="text-text-secondary font-light text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 font-light rounded-none transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-secondary text-text-primary hover:bg-primary hover:text-white'}`}>{plan.buttonText}</button>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <div className="pricing-container" style={{ marginLeft: '-1rem', marginRight: '-1rem', padding: 0, overflow: 'visible', width: 'calc(100% + 2rem)' }}>
            <div ref={pricingCarouselRef} className="pricing-grid" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', scrollPaddingLeft: '1.5rem', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: '1rem 0 2rem', margin: 0, paddingLeft: '1.5rem', paddingRight: '15vw' }}>
              {plans.map((plan, index) => (
                <div key={index} className="pricing-card" style={{ flex: '0 0 85vw', width: '85vw', minWidth: '85vw', maxWidth: '85vw', scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
                  <div className={`relative bg-white border ${plan.popular ? 'border-primary shadow-lg' : 'border-secondary'} p-8 flex flex-col h-full`}>
                    {plan.popular && (<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><span className="bg-primary text-white px-4 py-1 text-sm font-light">Most Popular</span></div>)}
                    <div className="mb-6">
                      <h3 className="text-2xl font-light text-text-primary mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-light text-text-primary">{plan.price}</span>
                        {plan.period !== 'pricing' && (<span className="text-text-secondary font-light ml-2">{plan.period}</span>)}
                      </div>
                      <p className="text-text-secondary font-light text-sm">{plan.description}</p>
                    </div>
                    <ul className="flex-1 space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-primary mr-2 flex-shrink-0 mt-0.5"><CheckmarkIcon /></span>
                          <span className="text-text-secondary font-light text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 font-light rounded-none transition-colors ${plan.popular ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-secondary text-text-primary hover:bg-primary hover:text-white'}`}>{plan.buttonText}</button>
                  </div>
                </div>
              ))}
            </div>
            <style>{`.pricing-grid::-webkit-scrollbar { display: none; }`}</style>
            <div className="flex justify-center gap-2 mt-4">
              {plans.map((_, index) => (
                <button key={index} onClick={() => scrollToPricingCard(index)} className={`transition-all duration-300 rounded-full ${activePricingIndex === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-gray-300'}`} aria-label={`Go to pricing plan ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing