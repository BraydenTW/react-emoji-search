import React, { useEffect} from 'react'
import Container from './components/Container'
import { keepTheme } from './utils/theme'

function App() {
    
  useEffect(() => {
    keepTheme()
  })

  return (
    <Container />
  )
}

export default App
