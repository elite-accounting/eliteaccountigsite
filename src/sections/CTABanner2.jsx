const CTABanner2 = () => {
  return (
    <section className="relative py-24 bg-secondary overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 2 }}></div>
      <div className="relative max-w-4xl mx-auto text-center px-6" style={{ zIndex: 10 }}>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
          Experience the Difference
        </h2>
        <p className="text-xl font-light text-white/90 mb-8">
          Join hundreds of satisfied clients who trust us with their financial success
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-white font-light rounded-none hover:bg-primary-dark transition-colors"
        >
          Get Started Today
        </a>
      </div>
    </section>
  )
}

export default CTABanner2