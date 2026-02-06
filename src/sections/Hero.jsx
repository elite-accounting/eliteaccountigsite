import { useTypingAnimation } from '../hooks/useTypingAnimation.js'

const Hero = () => {
  // Hero is visible immediately, so we don't need scroll detection
  const { displayText: welcomeText, isTyping: isTypingWelcome } = useTypingAnimation('Welcome to', 50, 500, false, true)
  const { displayText: titleText, isTyping: isTypingTitle } = useTypingAnimation('Expert Accounting Solutions', 90, 1200, false, true)
  const { displayText: descriptionText, isTyping: isTypingDescription } = useTypingAnimation('Professional financial services tailored for your business', 30, 3500, false, true)
  
  // Buttons appear after description starts typing
  const showButtons = descriptionText.length > 10

  return (
    <section
      id="home"
      className="relative min-h-[75vh] md:min-h-[80vh] flex items-start md:items-center justify-center bg-secondary pt-48 pb-16 md:py-16"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-4 md:mb-6">
          <span className="block text-xs md:text-base font-light text-white/80 uppercase tracking-wider mb-2 md:mb-4 min-h-[1.5rem]">
            {welcomeText}
            {isTypingWelcome && <span className="animate-pulse ml-1">|</span>}
          </span>
          <h1 className="text-3xl md:text-7xl font-light text-white min-h-[3rem] md:min-h-[5rem]">
            {titleText}
            {isTypingTitle && <span className="animate-pulse ml-1">|</span>}
          </h1>
        </div>
        <p 
          className="text-lg md:text-2xl font-light text-white/90 mb-6 md:mb-8 min-h-[2rem]"
          style={{
            opacity: descriptionText.length > 0 ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        >
          {descriptionText}
          {isTypingDescription && <span className="animate-pulse ml-1">|</span>}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white font-light rounded-none hover:bg-primary-dark transition-colors"
            style={{
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s'
            }}
          >
            Get Started
          </a>
          <a
            href="#services"
            className="group relative inline-block px-8 py-3 border-2 border-white/50 text-white font-light rounded-none overflow-hidden transition-all duration-300 hover:border-white/80 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(128, 128, 128, 0.1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              opacity: showButtons ? 1 : 0,
              transform: showButtons ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Our Services
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero