import { useState } from 'react'
import './App.css'
import FormSearch from './components/FormSearch'
import Movies from './components/Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Search Movies</h2>
      <FormSearch />
      <Movies />
    </div>
  )
}

export default App
