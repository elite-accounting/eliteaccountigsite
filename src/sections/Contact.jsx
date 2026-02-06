import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import Modal from '../components/Modal.jsx'

const Contact = () => {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [formRef, formVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccessModal(true)
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-secondary relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/25 to-transparent rotate-45 translate-x-16 -translate-y-16 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/25 to-transparent -rotate-45 -translate-x-16 translate-y-16 pointer-events-none z-0"></div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div 
          ref={headingRef}
          className="text-center mb-4"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-text-primary inline-block pb-4 relative" style={{ borderBottom: '3px solid #2F4F4F', paddingBottom: '1rem', width: 'fit-content', margin: '0 auto' }}>
            Contact Us
          </h2>
        </div>
        <p 
          className="text-text-secondary text-center mb-12 font-light"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          Get in touch with our team to discuss your accounting needs
        </p>

        <form 
          ref={formRef}
          onSubmit={handleSubmit} 
          className="bg-white p-8 border border-secondary"
          style={{
            opacity: formVisible ? 1 : 0,
            transform: formVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s'
          }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-text-primary font-light mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-secondary focus:outline-none focus:border-primary transition-colors font-light" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-text-primary font-light mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-secondary focus:outline-none focus:border-primary transition-colors font-light" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-text-primary font-light mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-secondary focus:outline-none focus:border-primary transition-colors font-light resize-none" />
          </div>
          <button type="submit" className="w-full px-8 py-3 bg-primary text-white font-light rounded-none hover:bg-primary-dark transition-colors">Send Message</button>
        </form>
      </div>
      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message sent"
        variant="success"
      >
        <p className="mb-4">Thank you for your message. We&apos;ll get back to you soon.</p>
        <p className="text-sm">This is a demo — on your live site this would confirm a real submission.</p>
      </Modal>
    </section>
  )
}

export default Contact