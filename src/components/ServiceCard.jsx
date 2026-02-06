import { useState } from 'react'
import Modal from './Modal.jsx'

const ServiceCard = ({ icon, title, description, href = '#services' }) => {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false)

  const handleLearnMoreClick = (e) => {
    e.preventDefault()
    setShowLearnMoreModal(true)
  }

  return (
    <>
      <div className="group relative bg-white border border-secondary p-8 hover:border-primary transition-all duration-300 overflow-hidden flex flex-col h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent transform rotate-45 translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300" />
        <div className="relative z-10 flex flex-col flex-1">
          <div className="mb-4 text-primary">{icon}</div>
          <h3 className="text-xl font-light text-text-primary mb-3">{title}</h3>
          <p className="text-text-secondary font-light leading-relaxed mb-6 flex-1">{description}</p>
          <a
            href={href}
            onClick={handleLearnMoreClick}
            className="text-primary font-light text-sm hover:text-primary-dark transition-colors inline-flex items-center group/link"
          >
            Learn More
            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <Modal
        isOpen={showLearnMoreModal}
        onClose={() => setShowLearnMoreModal(false)}
        title="Learn more"
      >
        On your real site, these links will go to dedicated service pages for each offering. That improves SEO, gives you more room to detail each service, and helps visitors find exactly what they need.
      </Modal>
    </>
  )
}

export default ServiceCard