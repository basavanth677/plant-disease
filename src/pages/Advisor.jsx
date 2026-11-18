import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, Bot, Leaf, Send, Sparkles, Sprout, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { getAdvisorResponse } from '../data/advisorResponses.js'

const suggestions = ['How can I prevent leaf diseases?', 'What causes yellow leaves?', 'How do I protect tomato plants?', 'What is the best treatment for fungal infections?']
const initialMessages = [{ id: 1, role: 'assistant', text: 'Hello! I am your PlantCare AI Advisor. How can I help your plants today?' }]

export default function Advisor() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const chatBody = useRef(null)

  useEffect(() => {
    chatBody.current?.scrollTo({ top: chatBody.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text = input) => {
    const question = text.trim()
    if (!question || typing) return
    setMessages((current) => [...current, { id: Date.now(), role: 'user', text: question }])
    setInput('')
    setTyping(true)
    window.setTimeout(() => {
      setMessages((current) => [...current, { id: Date.now() + 1, role: 'assistant', text: getAdvisorResponse(question) }])
      setTyping(false)
    }, 1100)
  }

  return (
    <div className="inner-page advisor-page">
      <div className="page-intro"><Link to="/" className="back-link"><ArrowLeft size={15} /> Back home</Link><SectionHeading eyebrow="A little advice, right when you need it" title="Your growing questions, welcome here." description="Ask about your crop, a change you’ve noticed, or what to try next. We’ll work it out together." /></div>
      <div className="chat-card">
        <div className="chat-header"><span className="advisor-avatar"><Sprout size={20} /></span><div className="chat-header-copy"><h2>PlantCare AI Advisor</h2><span><i className="online-dot" /> Here to help your plants thrive</span></div><span className="demo-label"><Sparkles size={13} /> DEMO</span></div>
        <div className="chat-body" ref={chatBody} onScroll={(event) => setShowScroll(event.currentTarget.scrollHeight - event.currentTarget.scrollTop - event.currentTarget.clientHeight > 80)}>
          <div className="chat-date">A FRESH START</div>
          {messages.map((message) => <div className={`message-row ${message.role === 'user' ? 'user-row' : ''}`} key={message.id}><span className={`message-avatar ${message.role === 'user' ? 'user-avatar' : ''}`}>{message.role === 'user' ? <UserRound size={15} /> : <Leaf size={15} />}</span><div className="message-content"><small>{message.role === 'user' ? 'YOU' : 'PLANTCARE AI'}</small><div className="message-bubble">{message.text}</div></div></div>)}
          {typing && <div className="message-row"><span className="message-avatar"><Leaf size={15} /></span><div className="message-content"><small>PLANTCARE AI</small><div className="message-bubble typing-bubble"><span /><span /><span /></div></div></div>}
        </div>
        {showScroll && <button className="scroll-bottom" onClick={() => chatBody.current?.scrollTo({ top: chatBody.current.scrollHeight, behavior: 'smooth' })} aria-label="Scroll to latest message"><ArrowDown size={16} /></button>}
        {messages.length === 1 && <div className="suggestions"><div className="suggestion-label"><Sparkles size={14} /> A few things you can ask</div><div className="suggestion-chips">{suggestions.map((question) => <button key={question} onClick={() => sendMessage(question)}>{question}<ArrowRight size={13} /></button>)}</div></div>}
        <form className="chat-composer" onSubmit={(event) => { event.preventDefault(); sendMessage() }}><span className="composer-leaf"><Leaf size={17} /></span><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question about your plants…" aria-label="Your message" /><span className="composer-hint">Press Enter to send</span><button type="submit" className="send-button" disabled={!input.trim() || typing} aria-label="Send message"><Send size={17} /></button></form>
        <div className="chat-footnote"><Bot size={14} /> AI-generated guidance is a starting point. For serious crop concerns, contact a local agricultural expert.</div>
      </div>
    </div>
  )
}
