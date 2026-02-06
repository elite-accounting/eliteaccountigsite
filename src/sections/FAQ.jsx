import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [faqsRef, faqsVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })

  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer comprehensive accounting services including tax planning, financial analysis, bookkeeping, audit services, payroll management, and financial consulting tailored to your business needs.',
    },
    {
      question: 'How quickly can you respond to inquiries?',
      answer:
        'We guarantee a 24-hour response time for all client inquiries. Our dedicated account managers ensure you receive timely and thorough responses to all your questions.',
    },
    {
      question: 'Do you work with small businesses?',
      answer:
        'Yes, we work with businesses of all sizes, from small startups to large enterprises. Our services are scalable and tailored to meet the specific needs of each client.',
    },
    {
      question: 'What makes your services different?',
      answer:
        'Our team consists of certified CPAs with over 20 years of experience. We use advanced cloud-based systems, provide dedicated account managers, and offer customized solutions rather than one-size-fits-all approaches.',
    },
    {
      question: 'How do I get started?',
      answer:
        "Simply fill out our contact form or schedule a consultation. We'll discuss your specific needs and create a tailored plan that works for your business.",
    },
    {
      question: 'What are your pricing options?',
      answer:
        'We offer flexible pricing plans starting at $499/month for small businesses, with professional and enterprise options available. Contact us for custom pricing based on your specific requirements.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
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
            Frequently Asked Questions
          </h2>
        </div>

        <div 
          ref={faqsRef}
          className="space-y-4"
          style={{
            opacity: faqsVisible ? 1 : 0,
            transform: faqsVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-secondary bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-light text-text-primary pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-text-secondary font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ