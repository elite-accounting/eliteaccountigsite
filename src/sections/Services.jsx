import { useEffect, useRef, useState } from 'react'
import ServiceCard from '../components/ServiceCard.jsx'
import { TaxPlanningIcon, FinancialAnalysisIcon, BookkeepingIcon, AuditServicesIcon, PayrollManagementIcon, ConsultingIcon } from '../components/Icons.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const Services = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const services = [
    { icon: <TaxPlanningIcon />, title: 'Tax Planning', description: 'Strategic tax planning to minimize liabilities and maximize savings for your business.' },
    { icon: <FinancialAnalysisIcon />, title: 'Financial Analysis', description: 'Comprehensive financial analysis and reporting to guide your business decisions.' },
    { icon: <BookkeepingIcon />, title: 'Bookkeeping', description: 'Accurate and timely bookkeeping services to keep your finances organized.' },
    { icon: <AuditServicesIcon />, title: 'Audit Services', description: 'Thorough audit services to ensure compliance and identify opportunities.' },
    { icon: <PayrollManagementIcon />, title: 'Payroll Management', description: 'Efficient payroll processing and management for your workforce.' },
    { icon: <ConsultingIcon />, title: 'Consulting', description: 'Expert financial consulting to help your business grow and thrive.' },
  ]
  useEffect(() => {
    const carousel = carouselRef.current
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
      setActiveIndex(closestIndex)
    }
    carousel.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => { carousel.removeEventListener('scroll', handleScroll) }
  }, [])
  const scrollToCard = (index) => {
    const carousel = carouselRef.current
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
    <section id="services" className="py-20 px-6 bg-secondary relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-25 rotate-45 translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-25 -rotate-45 -translate-x-8 translate-y-8"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={sectionRef}
          className="text-center mb-12"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary inline-block pb-4 relative" style={{ borderBottom: '3px solid #2F4F4F', paddingBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>Our Services</h2>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (<ServiceCard key={index} {...service} />))}
        </div>
        <div className="md:hidden">
          <div className="services-container" style={{ marginLeft: '-1rem', marginRight: '-1rem', padding: 0, overflow: 'visible', width: 'calc(100% + 2rem)' }}>
            <div
              ref={carouselRef}
              className="services-carousel"
              style={{
                '--mobile-slide-width': 'min(340px, calc(100vw - 2rem))',
                '--mobile-slide-height': '380px',
                display: 'flex',
                gap: '1rem',
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollSnapType: 'x mandatory',
                scrollPadding: 0,
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                padding: '1rem 0',
                margin: 0,
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card-wrapper"
                  style={{
                    flex: '0 0 var(--mobile-slide-width)',
                    width: 'var(--mobile-slide-width)',
                    minWidth: 'var(--mobile-slide-width)',
                    maxWidth: 'var(--mobile-slide-width)',
                    height: 'var(--mobile-slide-height)',
                    minHeight: 'var(--mobile-slide-height)',
                    display: 'flex',
                    flexDirection: 'column',
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                  }}
                >
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
            <style>{`.services-carousel::-webkit-scrollbar { display: none; }`}</style>
            <div className="flex justify-center gap-2 mt-6">
              {services.map((_, index) => (
                <button key={index} onClick={() => scrollToCard(index)} className={`transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-gray-300'}`} aria-label={`Go to service ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services