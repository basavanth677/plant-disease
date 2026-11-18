import { ArrowRight, BrainCircuit, Database, Leaf, MessageCircle, Microscope, ShieldCheck, Sprout, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'

const technologies = [
  { icon: BrainCircuit, title: 'Convolutional neural networks', text: 'CNNs are designed to recognize visual patterns in images. With a trained crop dataset, they can help identify leaf features associated with plant diseases.' },
  { icon: Database, title: 'PlantVillage dataset', text: 'A widely used public research dataset of healthy and diseased plant-leaf images can support model training and evaluation.' },
  { icon: MessageCircle, title: 'Retrieval-augmented guidance', text: 'A future RAG assistant can retrieve relevant, trusted agricultural references before composing a helpful answer to a grower’s question.' },
]

export default function About() {
  return (
    <div className="inner-page about-page">
      <div className="page-intro"><Link to="/" className="back-link"><ArrowRight className="back-arrow" size={15} /> Back home</Link><SectionHeading eyebrow="Good growing is a shared effort" title={<>A thoughtful companion<br className="desktop-break" /> for every growing season.</>} description="PlantCare AI is a friendly first step toward understanding what your plants may be telling you—built to make crop-care knowledge feel more approachable." /></div>
      <section className="mission-card"><div className="mission-icon"><Sprout size={26} /></div><div className="mission-copy"><span className="eyebrow">WHY PLANTCARE AI</span><h2>Because healthier plants begin with better questions.</h2><p>Smallholder farmers and home growers deserve useful tools that feel clear, not complicated. PlantCare AI brings image-based disease screening and practical crop-care conversations together in one welcoming place.</p></div><div className="mission-stamp"><Leaf size={20} /><span>GROW<br />TOGETHER</span></div></section>
      <section className="technology-section"><SectionHeading eyebrow="How it comes together" title="Technology, with care at the center." description="The experience is designed around two helpful building blocks: seeing what’s on a leaf, then finding useful guidance." centered /><div className="tech-grid">{technologies.map(({ icon: Icon, title, text }, index) => <article className="tech-card" key={title}><span className="tech-icon"><Icon size={21} /></span><span className="tech-step">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="about-flow"><div className="flow-copy"><span className="eyebrow">A helpful first step, not the final word</span><h2>Built to support real-world growing.</h2><p>This frontend currently uses realistic sample responses so you can explore the experience. It does not send images to a model or provide a verified diagnosis. The architecture is ready to connect with a Python Flask service, a CNN model, and a retrieval-backed agricultural advisor.</p><Link to="/detect" className="text-link">Try a sample leaf check <ArrowRight size={16} /></Link></div><div className="flow-visual"><div className="flow-step"><span><Microscope size={18} /></span><div><strong>Leaf photo</strong><small>Grower-selected image</small></div></div><div className="flow-connector"><i /><i /><i /></div><div className="flow-step"><span><Workflow size={18} /></span><div><strong>AI first look</strong><small>Future model integration</small></div></div><div className="flow-connector"><i /><i /><i /></div><div className="flow-step"><span><ShieldCheck size={18} /></span><div><strong>Practical guidance</strong><small>Context-aware next steps</small></div></div></div></section>
      <section className="about-cta"><div><span className="eyebrow">LET'S GROW SOMETHING GOOD</span><h2>Curiosity is a pretty great place to start.</h2></div><Link to="/advisor" className="button button-primary">Ask the AI Advisor <ArrowRight size={16} /></Link></section>
    </div>
  )
}
