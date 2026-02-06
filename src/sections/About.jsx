import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { useNumberAnimation } from '../hooks/useNumberAnimation.js'

const StatCard = ({ stat, isVisible, delay }) => {
  const animatedNumber = useNumberAnimation(stat.number, 2000, true, isVisible)
  
  return (
    <div 
      className="text-center p-6 bg-secondary border border-secondary"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
      }}
    >
      <div className="text-4xl md:text-5xl font-light text-primary mb-2">{animatedNumber}</div>
      <div className="text-text-secondary font-light text-sm">{stat.label}</div>
    </div>
  )
}

const About = () => {
  const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.3, oneTime: true })
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2, oneTime: true })

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '50+', label: 'Certified CPAs' },
    { number: '99%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 5 }}></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary/20 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" style={{ zIndex: 15 }}></div>
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
            About Elite Accounting
          </h2>
        </div>
        <div 
          ref={contentRef}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
          }}
        >
          <div>
            <p className="text-text-secondary font-light leading-relaxed text-lg mb-6">
              With over two decades of experience in corporate accounting, Elite Accounting
              has established itself as a trusted partner for businesses seeking financial
              excellence. Our team of certified professionals brings expertise, precision,
              and dedication to every client relationship.
            </p>
            <p className="text-text-secondary font-light leading-relaxed text-lg">
              We understand that every business is unique, which is why we offer tailored
              accounting solutions that align with your specific needs and goals. From
              small startups to large enterprises, we provide comprehensive financial
              services that drive growth and ensure compliance.
            </p>
          </div>
          <div className="relative h-80 md:h-96">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Professional accounting team" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
        </div>
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={statsVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About