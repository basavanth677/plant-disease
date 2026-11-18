import { ArrowDownRight, ArrowRight, Bot, Camera, Check, ChevronRight, CircleHelp, Leaf, ScanLine, ShieldCheck, Sparkles, Sprout, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

const features = [
  { icon: ScanLine, number: '01', title: 'Instant disease detection', text: 'Get a quick first look at what might be affecting your leaves—right from a photo.', tone: 'mint' },
  { icon: Bot, number: '02', title: 'Recommendations that help', text: 'Clear, practical next steps to help you care for your crop with confidence.', tone: 'cream' },
  { icon: Sprout, number: '03', title: 'Smarter growing, every day', text: 'Build healthy habits with approachable guidance for the plants you grow.', tone: 'lavender' },
]

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="announcement"><span className="announcement-dot" /> A little more confidence in every growing season</div>
            <h1>Protect your plants with <span>AI intelligence.</span></h1>
            <p className="hero-description">A healthy harvest starts with knowing what your plants need. Get a quick leaf check and practical care guidance, all in one place.</p>
            <div className="hero-actions">
              <Link to="/detect" className="button button-primary">Upload a leaf image <ArrowRight size={17} /></Link>
              <Link to="/advisor" className="button button-secondary"><span className="play-icon">✳</span> Explore AI Advisor</Link>
            </div>
            <div className="hero-proof"><div className="avatar-stack"><span>🌱</span><span>🌿</span><span>🍃</span></div><span>Made for growers, <strong>big and small</strong></span><span className="proof-divider" /><span className="stars">★★★★★</span><span>Easy to use</span></div>
          </div>
          <div className="hero-visual">
            <div className="image-backdrop" />
            <div className="photo-frame">
              <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1100&q=85" alt="Sunlit green leaves growing in a garden" />
              <div className="photo-shade" />
              <div className="photo-caption"><span className="caption-icon"><Leaf size={15} /></span><span><strong>Good things grow here</strong><small>One leaf at a time</small></span></div>
            </div>
            <div className="floating-card scan-card"><span className="floating-icon"><ScanLine size={17} /></span><span><strong>Leaf scan ready</strong><small>Your plant's in good hands</small></span><span className="status-check"><Check size={13} /></span></div>
            <div className="floating-card insight-card"><div className="insight-top"><span className="insight-icon"><Sparkles size={15} /></span><span>GROWER'S NOTE</span></div><strong>Small steps.<br />Healthier leaves.</strong><div className="insight-bottom"><span>Every season counts</span><ArrowDownRight size={16} /></div></div>
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="leaf-decoration"><Leaf size={44} /></div>
          </div>
        </div>
        <div className="hero-bottom-line"><span>ROOTED IN CARE</span><span className="hero-line" /><span>MADE FOR THE WAY YOU GROW</span><span className="hero-line" /><span>GROW WITH CONFIDENCE</span></div>
      </section>

      <section className="feature-section">
        <div className="feature-top">
          <SectionHeading eyebrow="A helping hand for your harvest" title={<>Plant care, made<br className="desktop-break" /> a little simpler.</>} description="You know your plants best. We’re here to help you notice the little things and find the next right step." />
          <Link to="/about" className="text-link">Get to know us <ArrowRight size={16} /></Link>
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, number, title, text, tone }) => (
            <article className={`feature-card ${tone}`} key={title}>
              <div className="feature-card-top"><span className="feature-icon"><Icon size={20} /></span><span className="feature-number">{number} / 03</span></div>
              <h3>{title}</h3><p>{text}</p><span className="feature-arrow"><ArrowRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section">
        <div className="how-image"><img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1000&q=85" alt="Rows of healthy green plants growing in a garden" /><div className="how-image-tag"><Sun size={16} /><span>Better growing starts with a closer look</span></div></div>
        <div className="how-content"><SectionHeading eyebrow="Your plants, your pace" title="From a leaf photo to a clear next step." description="No complicated tools or confusing jargon. Just a little support when your plants need it." />
          <div className="steps-list"><div className="step-item"><span className="step-count">01</span><span className="step-icon"><Camera size={18} /></span><span><strong>Take a quick photo</strong><small>Choose a clear picture of the leaf you’re wondering about.</small></span></div><div className="step-item"><span className="step-count">02</span><span className="step-icon"><ScanLine size={18} /></span><span><strong>Get an AI-powered first look</strong><small>See a sample identification with confidence and helpful context.</small></span></div><div className="step-item"><span className="step-count">03</span><span className="step-icon"><ShieldCheck size={18} /></span><span><strong>Find practical care advice</strong><small>Explore prevention tips and what to consider next.</small></span></div></div>
          <Link to="/detect" className="button button-primary how-button">Check a leaf <ChevronRight size={17} /></Link>
        </div>
      </section>

      <section className="bottom-cta"><div className="cta-leaf"><Leaf size={30} /></div><div><span className="eyebrow">YOUR NEXT GOOD GROWING DAY</span><h2>A healthier garden starts with a question.</h2><p>We’re here to help you find an answer.</p></div><Link to="/advisor" className="button button-light">Ask the AI Advisor <ArrowRight size={17} /></Link><CircleHelp className="cta-watermark" size={180} /></section>
    </>
  )
}
