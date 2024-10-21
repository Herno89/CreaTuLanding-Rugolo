import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  console.log("se renderiza app");
  
  const [valor,setValor] = useState(0)
  const [count, setCount] = useState(0)
  

  return (
    <>
    <NavBar valor ={valor}/>
{/*       <div>
      <h1>Hola React</h1>  
      <Button text="Mi primer boton" color= "red"/>
      <Button text="Mi primer boton" color= "blue"/>
      <Button text="Mi primer boton" color= "green"/>
      </div> */}
      <ItemListContainer mensaje = "Listado de articulos" fn={setValor}/>
    </>
  )
}

export default App
