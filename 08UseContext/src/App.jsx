import { useState } from 'react'
import { ThemeContext } from './assets/context/ThemeContext';
import Navbar from './componts/navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ThemeContext.Provider value={{color: 'blue', background: 'lightgray'}}>
      <Navbar />
        </ThemeContext.Provider>
    </>
  )
}

export default App
