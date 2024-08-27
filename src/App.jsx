import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount'
import NavBar from './Components/NavBar'

function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount/>
    </div>
  )
}

export default App
