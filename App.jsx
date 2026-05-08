import { useState } from 'react'
import MilkTracker from './components/MilkTracker'
import ElectricityTracker from './components/ElectricityTracker'
import Dashboard from './components/Dashboard'
import './index.css'

export default function App() {
  const [tab, setTab] = useState('dashboard')

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">🏠</span>
            <span className="brand-name">GharKhata</span>
            <span className="brand-sub">household tracker</span>
          </div>
          <nav className="nav">
            <button className={tab === 'dashboard' ? 'nav-btn active' : 'nav-btn'} onClick={() => setTab('dashboard')}>
              <span className="nav-icon">📊</span> Dashboard
            </button>
            <button className={tab === 'milk' ? 'nav-btn active' : 'nav-btn'} onClick={() => setTab('milk')}>
              <span className="nav-icon">🥛</span> Milk
            </button>
            <button className={tab === 'electricity' ? 'nav-btn active' : 'nav-btn'} onClick={() => setTab('electricity')}>
              <span className="nav-icon">⚡</span> Electricity
            </button>
          </nav>
        </div>
      </header>

      <main className="main">
        {tab === 'dashboard' && <Dashboard onNavigate={setTab} />}
        {tab === 'milk' && <MilkTracker />}
        {tab === 'electricity' && <ElectricityTracker />}
      </main>
    </div>
  )
}
