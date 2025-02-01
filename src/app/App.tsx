import { useState, useEffect } from 'react'

import { Home } from 'screens/Home'
import { Loader } from 'screens/Loader'
import { useLocaleInit } from 'entities/Locale'

import s from './App.module.css'

function App() {
  const localeLoaded = useLocaleInit()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 4500)
    return () => clearTimeout(timer)
  }, [])

  if (!localeLoaded) {
    return null
  }

  return <div className={s.app}>{showLoader ? <Loader /> : <Home />}</div>
}

export default App
