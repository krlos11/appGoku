import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { PageCard } from './components/PageCard'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage/> }/>
        <Route path='personaje/:id' element={<PageCard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
