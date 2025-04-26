'use client'

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Topbar from '../components/Topbar'
import MinimalTop from '../components/MinimalTopbar'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return <><Topbar /><About /></>
      case 'projects':
        return <><MinimalTop /><Projects /></>
      case 'skills':
        return <><MinimalTop /><Skills /></>
      case 'contact':
        return <><MinimalTop /><Contact /></>
      default:
        return <><Topbar /><About /></>
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4 bg-gray-800 rounded-lg m-4 overflow-auto shadow-lg">
        {renderSection()}
      </main>
    </div>
  )
}
