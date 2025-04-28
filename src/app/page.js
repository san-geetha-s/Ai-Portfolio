'use client'

import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Topbar from '../components/Topbar'
import MinimalTop from '../components/MinimalTopbar'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const [darkMode, setDarkMode] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderSection = () => {
    switch (activeTab) {
      case 'about':
        return (
          <>
            <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <About darkMode={darkMode} />
          </>
        )
      case 'projects':
        return (
          <>
            <MinimalTop darkMode={darkMode} setDarkMode={setDarkMode} />
            <Projects darkMode={darkMode} />
          </>
        )
      case 'skills':
        return (
          <>
            <MinimalTop darkMode={darkMode} setDarkMode={setDarkMode} />
            <Skills darkMode={darkMode} />
          </>
        )
      case 'contact':
        return (
          <>
            <MinimalTop darkMode={darkMode} setDarkMode={setDarkMode} />
            <Contact darkMode={darkMode} />
          </>
        )
      default:
        return (
          <>
            <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <About darkMode={darkMode} />
          </>
        )
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className={`flex-1 p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg m-4 overflow-auto shadow-lg transition-all duration-300`}>
        {renderSection()}
      </main>
    </div>
  )
}
