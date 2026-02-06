const TrustedBy = () => {
  const companies = [
    'TechCorp',
    'GlobalFinance',
    'Enterprise Solutions',
    'Business Partners',
    'Corporate Group',
    'Financial Services',
    'Industry Leaders',
    'Trusted Partners',
  ]

  return (
    <section className="py-12 bg-white border-y border-secondary overflow-hidden">
      <div className="relative w-full">
        <div className="flex gap-12 items-center scroll-container">
          <div className="flex gap-12 items-center scroll-content">
            {companies.map((company, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 text-text-secondary font-light text-lg whitespace-nowrap">{company}</div>
            ))}
            {companies.map((company, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 text-text-secondary font-light text-lg whitespace-nowrap">{company}</div>
            ))}
            {companies.map((company, index) => (
              <div key={`third-${index}`} className="flex-shrink-0 text-text-secondary font-light text-lg whitespace-nowrap">{company}</div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .scroll-container {
          width: 100%;
          overflow: hidden;
        }
        .scroll-content {
          display: inline-flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        .scroll-content:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  )
}

export default TrustedBy