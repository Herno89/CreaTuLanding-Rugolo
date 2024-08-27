import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemCount from './Components/ItemCount'
import NavB from './Components/NavB'

function App() {
  

  return (
    <div>
      <NavB/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      <ItemCount/>
    </div>
  )
}

export default App
