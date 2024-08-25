import { useState } from 'react'

import './App.css'
import ComingSoon from './Components/ComingSoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ComingSoon />
    </div>
  )
}

export default App
