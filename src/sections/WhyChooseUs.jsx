import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const WhyChooseUs = () => {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })

  const comparisons = [
    { feature: 'Expert Team', us: 'Certified CPAs with 20+ years experience', others: 'General accountants' },
    { feature: 'Technology', us: 'Advanced cloud-based systems', others: 'Basic software' },
    { feature: 'Response Time', us: '24-hour response guarantee', others: '3-5 business days' },
    { feature: 'Customization', us: 'Tailored solutions for your business', others: 'One-size-fits-all approach' },
    { feature: 'Support', us: 'Dedicated account manager', others: 'General support line' },
  ]
  return (
    <section className="py-20 px-6 bg-secondary relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-25 -rotate-45 -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary opacity-25 rotate-45 translate-x-8 translate-y-8"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div 
          ref={headingRef}
          className="text-center mb-12"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary inline-block pb-4 relative" style={{ borderBottom: '3px solid #2F4F4F', paddingBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>Why Choose Us</h2>
        </div>
        <div 
          ref={contentRef}
          className="hidden md:block bg-white border border-secondary overflow-hidden"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          <div className="grid grid-cols-3 gap-0">
            <div className="p-6 border-b border-r border-secondary bg-secondary font-light text-text-primary">Feature</div>
            <div className="p-6 border-b border-r border-secondary bg-primary text-white font-light">Elite Accounting</div>
            <div className="p-6 border-b border-secondary bg-white font-light text-text-primary">Others</div>
            {comparisons.map((comparison, index) => (
              <React.Fragment key={index}>
                <div className="p-6 border-b border-r border-secondary bg-secondary font-light text-text-primary">{comparison.feature}</div>
                <div className="p-6 border-b border-r border-secondary bg-white font-light text-text-primary">{comparison.us}</div>
                <div className="p-6 border-b border-secondary bg-white font-light text-text-secondary">{comparison.others}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="md:hidden space-y-4">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-white border border-secondary p-6">
              <h3 className="text-lg font-light text-primary mb-4">{comparison.feature}</h3>
              <div className="space-y-3">
                <div className="flex items-start"><div className="flex-1"><div className="text-sm font-light text-text-secondary mb-1">Elite Accounting</div><div className="text-text-primary font-light">{comparison.us}</div></div></div>
                <div className="border-t border-secondary pt-3"><div className="text-sm font-light text-text-secondary mb-1">Others</div><div className="text-text-secondary font-light">{comparison.others}</div></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs