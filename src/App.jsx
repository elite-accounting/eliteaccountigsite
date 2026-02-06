import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import TrustedBy from './sections/TrustedBy.jsx'
import Services from './sections/Services.jsx'
import CTABanner1 from './sections/CTABanner1.jsx'
import About from './sections/About.jsx'
import CTABanner2 from './sections/CTABanner2.jsx'
import WhyChooseUs from './sections/WhyChooseUs.jsx'
import Pricing from './sections/Pricing.jsx'
import OurTeam from './sections/OurTeam.jsx'
import Contact from './sections/Contact.jsx'
import FAQ from './sections/FAQ.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <CTABanner1 />
      <About />
      <CTABanner2 />
      <WhyChooseUs />
      <Pricing />
      <OurTeam />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App