import React, { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const OurTeam = () => {
  const carouselRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [gridRef, gridVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Accountant',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Tax Specialist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Financial Advisor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
    {
      name: 'David Thompson',
      role: 'Audit Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
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
    <section id="team" className="py-20 px-6 bg-secondary relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div 
          ref={headingRef}
          className="text-center mb-12"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary inline-block pb-4 relative" style={{ borderBottom: '3px solid #2F4F4F', paddingBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
            Our Team
          </h2>
        </div>
        <p 
          className="text-text-secondary text-center mb-12 font-light max-w-2xl mx-auto"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          Meet our experienced professionals dedicated to your financial success
        </p>
        
        {/* Desktop: 2x2 Grid */}
        <div 
          ref={gridRef}
          className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
          }}
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="hexagon-team-member">
              <div className="hexagon-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="hexagon-image"
                />
              </div>
              <div className="hexagon-team-info">
                <h3 className="text-xl font-light text-text-primary mb-1">{member.name}</h3>
                <p className="text-text-secondary font-light text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Scrollable Carousel */}
        <div className="md:hidden">
          <div className="team-container" style={{ marginLeft: '-1rem', marginRight: '-1rem', padding: 0, overflow: 'visible', width: 'calc(100% + 2rem)' }}>
            <div ref={carouselRef} className="team-carousel" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', scrollPadding: 0, WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none', padding: '1rem 0', margin: 0, paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
              {teamMembers.map((member, index) => (
                <div key={index} className="team-member-wrapper" style={{ flex: '0 0 calc(100vw - 4rem)', width: 'calc(100vw - 4rem)', minWidth: 'calc(100vw - 4rem)', maxWidth: 'calc(100vw - 4rem)', scrollSnapAlign: 'center', scrollSnapStop: 'always', height: '100%' }}>
                  <div className="hexagon-team-member">
                    <div className="hexagon-image-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="hexagon-image"
                      />
                    </div>
                    <div className="hexagon-team-info">
                      <h3 className="text-xl font-light text-text-primary mb-1">{member.name}</h3>
                      <p className="text-text-secondary font-light text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <style>{`.team-carousel::-webkit-scrollbar { display: none; }`}</style>
            <div className="flex justify-center gap-2 mt-6">
              {teamMembers.map((_, index) => (
                <button key={index} onClick={() => scrollToCard(index)} className={`transition-all duration-300 rounded-full ${activeIndex === index ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-gray-300'}`} aria-label={`Go to team member ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .hexagon-team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hexagon-image-wrapper {
          width: 280px;
          height: 280px;
          position: relative;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .hexagon-image-wrapper:hover {
          transform: scale(1.05);
        }

        .hexagon-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: all 0.3s ease;
        }

        .hexagon-image-wrapper:hover .hexagon-image {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }

        .hexagon-team-info {
          max-width: 280px;
        }

        @media (max-width: 768px) {
          .hexagon-image-wrapper {
            width: 240px;
            height: 240px;
          }

          .hexagon-team-info {
            max-width: 240px;
          }
        }
      `}</style>
    </section>
  )
}

export default OurTeam

