import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesDropdownRef = useRef(null)
  const closeTimeoutRef = useRef(null)

  const services = [
    { name: 'Tax Planning', href: '#services' },
    { name: 'Financial Analysis', href: '#services' },
    { name: 'Bookkeeping', href: '#services' },
    { name: 'Audit Services', href: '#services' },
    { name: 'Payroll Management', href: '#services' },
    { name: 'Consulting', href: '#services' },
  ]

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only handle desktop clicks (screens wider than md breakpoint)
      if (window.innerWidth >= 768) {
        if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
          setIsServicesOpen(false)
        }
      }
    }

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [isServicesOpen])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          <a href="#home" className="flex-shrink-0 text-2xl font-light text-primary hover:text-primary-dark transition-colors" onClick={() => setIsOpen(false)}>
            Elite Accounting
          </a>
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.name}
                  ref={servicesDropdownRef}
                  className="relative"
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) {
                      clearTimeout(closeTimeoutRef.current)
                      closeTimeoutRef.current = null
                    }
                    setIsServicesOpen(true)
                  }}
                  onMouseLeave={() => {
                    closeTimeoutRef.current = setTimeout(() => {
                      setIsServicesOpen(false)
                    }, 150)
                  }}
                >
                  <a
                    href={link.href}
                    className="text-text-primary hover:text-primary transition-colors font-light flex items-center gap-1"
                  >
                    {link.name}
                    <svg className="w-4 h-4 transform transition-transform" style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                  {isServicesOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white border border-secondary shadow-lg z-50 py-2">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-text-primary hover:bg-secondary hover:text-primary transition-colors font-light"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-text-primary hover:text-primary transition-colors font-light"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-white font-light rounded-none hover:bg-primary-dark transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
          <div className="md:hidden flex-shrink-0">
            <button
              className="text-primary flex items-center justify-center w-10 h-10 bg-primary/20 border border-primary/30 hover:bg-secondary transition-colors"
              onClick={() => {
                setIsOpen(!isOpen)
                if (isOpen) {
                  setIsServicesOpen(false)
                }
              }}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden pb-6">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.name}>
                  <button
                    className="w-full flex items-center justify-between py-3 text-text-primary hover:text-primary transition-colors font-light"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsServicesOpen(!isServicesOpen)
                    }}
                  >
                    <span>{link.name}</span>
                    <svg className="w-4 h-4 transform transition-transform" style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 pb-2">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.href}
                          className="block py-2 text-text-secondary hover:text-primary transition-colors font-light"
                          onClick={() => {
                            setIsOpen(false)
                            setIsServicesOpen(false)
                          }}
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-text-primary hover:text-primary transition-colors font-light"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-3 bg-primary text-white font-light text-center rounded-none hover:bg-primary-dark transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Schedule Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar