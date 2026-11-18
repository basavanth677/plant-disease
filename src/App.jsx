import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Detection from './pages/Detection.jsx'
import Advisor from './pages/Advisor.jsx'
import About from './pages/About.jsx'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detection />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-brand"><span className="brand-mark small">P</span> PlantCare AI</span>
          <span>Helping every plant grow a little stronger.</span>
          <span>© 2025 PlantCare AI</span>
        </div>
      </footer>
    </div>
  )
}
