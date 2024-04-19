import { useState } from 'react'
import './App.css'
import { MenuApp } from './components/MenuApp'
import { MejorCalificadasApp } from './route/MejorCalificadasApp'
import { PeliculasCArteleraApp } from './route/PeliculasCArteleraApp'
import { EstrenosApp } from './route/EstrenosApp'
import { DescripcioApp } from './route/DescripcioApp'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <MenuApp/>
    <Routes>
      <Route path='/' element={<EstrenosApp></EstrenosApp>}></Route>
      <Route path='calificadas' element={<MejorCalificadasApp></MejorCalificadasApp>}></Route>
      <Route path='peliculas' element={<PeliculasCArteleraApp></PeliculasCArteleraApp>}></Route>
      <Route path='/detalle/:id' element={<DescripcioApp></DescripcioApp>}></Route>
    </Routes>
    </>
  )
}

export default App
