import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage'
import SingleMovie from './components/SingleMovie'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path='/movies/:id' element={<SingleMovie/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
