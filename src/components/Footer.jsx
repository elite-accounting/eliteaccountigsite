const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Tax Planning', href: '#services' },
      { name: 'Financial Analysis', href: '#services' },
      { name: 'Bookkeeping', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
    ],
  }

  return (
    <footer className="bg-secondary border-t border-secondary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light text-primary mb-4">
              Elite Accounting
            </h3>
            <p className="text-text-secondary font-light text-sm">
              Professional accounting services for businesses of all sizes.
            </p>
          </div>
          <div>
            <h4 className="text-primary font-light mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors font-light text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-light mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-colors font-light text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-primary font-light mb-4">Contact</h4>
            <p className="text-text-secondary font-light text-sm mb-2">
              Email: info@eliteaccounting.com
            </p>
            <p className="text-text-secondary font-light text-sm">
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-secondary pt-8">
          <p className="text-text-secondary font-light text-sm text-center">
             {currentYear} Elite Accounting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer