const CTABanner1 = () => {
  return (
    <section
      className="relative py-24 px-6 bg-secondary"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Ready to Transform Your Finances?
        </h2>
        <p className="text-xl font-light text-white/90 mb-8">
          Let our expert team help you achieve financial excellence
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-white font-light rounded-none hover:bg-primary-dark transition-colors"
        >
          Schedule Consultation
        </a>
      </div>
    </section>
  )
}

export default CTABanner1