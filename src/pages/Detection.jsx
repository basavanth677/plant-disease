import { useEffect, useRef, useState } from 'react'
import { AlertCircle, ArrowLeft, ArrowRight, Check, FileImage, Leaf, LoaderCircle, RotateCcw, ShieldCheck, Sparkles, Sprout, Upload, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading.jsx'
import { sampleDetections } from '../data/sampleData.js'

export default function Detection() {
  const fileInput = useRef(null)
  const detectionTimer = useRef(null)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview)
  }, [preview])

  useEffect(() => () => window.clearTimeout(detectionTimer.current), [])

  const addFile = (selected) => {
    if (!selected) return
    setError('')
    setResult(null)
    if (!selected.type.startsWith('image/')) {
      setError('Please choose an image file such as JPG, PNG, or WEBP.')
      return
    }
    if (selected.size > 10 * 1024 * 1024) {
      setError('This image is larger than 10 MB. Please choose a smaller image.')
      return
    }
    setFile(selected)
    setPreview(URL.createObjectURL(selected))
  }

  const detect = () => {
    if (!file) return
    setLoading(true)
    detectionTimer.current = window.setTimeout(() => {
      setResult(sampleDetections[Math.floor(Math.random() * sampleDetections.length)])
      setLoading(false)
      detectionTimer.current = null
    }, 1500)
  }

  const reset = () => {
    window.clearTimeout(detectionTimer.current)
    detectionTimer.current = null
    setLoading(false)
    setFile(null)
    setPreview('')
    setResult(null)
    setError('')
    if (fileInput.current) fileInput.current.value = ''
  }

  return (
    <div className="inner-page">
      <div className="page-intro"><Link to="/" className="back-link"><ArrowLeft size={15} /> Back home</Link><SectionHeading eyebrow="A closer look at your crop" title="Let's check that leaf." description="Upload a clear photo and get a helpful first look at what might be going on." /></div>
      <div className={`detection-layout ${result ? 'has-result' : ''}`}>
        <section className="upload-panel">
          <div className="panel-title"><span className="step-badge">01</span><div><h2>Upload a leaf image</h2><p>A clear, well-lit photo works best.</p></div></div>
          <input ref={fileInput} className="visually-hidden" type="file" accept="image/*" onChange={(event) => addFile(event.target.files?.[0])} />
          {preview ? (
            <div className="preview-wrap"><img src={preview} alt="Selected leaf for disease detection" /><button className="remove-image" onClick={reset} aria-label="Remove selected image"><X size={17} /></button><div className="preview-file"><FileImage size={16} /><span>{file?.name}</span></div></div>
          ) : (
            <button type="button" className="dropzone" onClick={() => fileInput.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); addFile(event.dataTransfer.files?.[0]) }}>
              <span className="upload-icon"><Upload size={23} /></span><strong>Drop your leaf photo here</strong><span>or <span className="browse-link">browse files</span> on your device</span><small>JPG, PNG or WEBP · max 10 MB</small>
            </button>
          )}
          {error && <div className="form-error"><AlertCircle size={16} />{error}</div>}
          {loading ? <div className="analyzing-state"><LoaderCircle className="spin" size={21} /><span><strong>Taking a closer look…</strong><small>Checking your leaf against common crop conditions</small></span></div> : (
            <button className="button button-primary detect-button" disabled={!file} onClick={detect}><Sparkles size={16} /> Detect disease <ArrowRight size={16} /></button>
          )}
          <div className="privacy-note"><ShieldCheck size={16} /><span>Your photo is only used for this demo analysis and isn’t saved.</span></div>
        </section>
        <section className={`result-panel ${result ? 'result-ready' : ''}`}>
          {result ? (
            <div className="result-content">
              <div className="result-heading"><span className="result-status"><Check size={13} /> FIRST LOOK READY</span><button className="icon-button" onClick={reset} aria-label="Upload another image"><RotateCcw size={17} /></button></div>
              <div className="result-crop"><span className="result-leaf"><Leaf size={19} /></span><div><small>LIKELY CROP</small><h2>{result.plant}</h2></div><div className="confidence"><strong>{result.confidence}%</strong><small>match confidence</small></div></div>
              <div className="disease-callout"><span className="callout-indicator" /><div><small>POSSIBLE CONDITION</small><h3>{result.disease}</h3></div></div>
              <p className="result-description">{result.description}</p>
              <div className="result-details">
                <ResultList title="What to look for" items={result.symptoms} />
                <ResultList title="Prevention ideas" items={result.prevention} />
                <ResultList title="What you can try" items={result.treatment} />
              </div>
              <p className="result-disclaimer"><AlertCircle size={14} /> This AI demo offers a starting point, not a confirmed diagnosis. Conditions can look similar—check with a local agricultural expert.</p>
              <button className="button button-secondary another-button" onClick={reset}><RotateCcw size={15} /> Check another image</button>
            </div>
          ) : (
            <div className="empty-result"><span className="result-illustration"><Sprout size={38} /><span className="illustration-spark">✳</span></span><span className="eyebrow">YOUR RESULTS WILL GROW HERE</span><h2>Ready when you are.</h2><p>Once you upload a photo, you’ll find a helpful first look and practical care ideas right here.</p><div className="empty-result-tip"><span>✦</span><span><strong>A quick photo tip</strong><small>Natural light and a close-up of the affected leaf can make details easier to see.</small></span></div></div>
          )}
        </section>
      </div>
    </div>
  )
}

function ResultList({ title, items }) {
  return <div className="result-list"><h4>{title}</h4>{items.map((item) => <div className="result-list-item" key={item}><span className="list-check"><Check size={12} /></span><span>{item}</span></div>)}</div>
}
