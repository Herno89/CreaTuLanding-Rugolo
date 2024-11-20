import React from 'react'

const Item = ({elemento}) => {
  return (
    <div>
    <h3>
        {elemento.nombre}
    </h3>
    <img src={elemento.img} alt="botellaVino" width={"300px"} />
    <p>{elemento.uva}</p>
    <p>{elemento.precio}</p>
    </div>
  )
}

export default Item
