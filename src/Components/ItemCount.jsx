import { useState } from 'react'


function ItemCount (){
    const [count , setCount] = useState(0)

    const handleAdd = () =>  setCount(count + 1)
    const handleRes = () =>  setCount(count - 1)
    

    return (
        <div>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleRes}>-</button>
            <p>{count}</p>
            


        </div>

    )
}
export default ItemCount