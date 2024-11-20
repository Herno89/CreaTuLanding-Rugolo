import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../../data/backend-falso";

const ItemListContainer = ({ mensaje, fn }) => {
  const [products, setProducts] = useState([]);
  const [uva, setUva] = useState("");

  useEffect(() => {
    if (uva) {
      getProductsByCategory(uva)
      .then((res) => setProducts(res))
      .catch((e) => console.error(e))
      .finally(console.log("Se resolvio la promesa de uva"));
    }else{
      
      getProducts()
      .then((res) => setProducts(res))
      .catch((e) => console.error(e))
      .finally(console.log("Se resolvio la promesa"));
      
    }
    }, [uva]);
  
  const changeUva =(uva)=>{
    setUva(uva)
  }
  console.log(uva);
  
  

  return (
    <>
      <div>
        <div>{mensaje}</div>
        <Button fn={fn} text="comprar" /></div>
      <div>
        <div><Button fn={()=>changeUva("Malbec")} text="Malbec"/></div>
        <div><Button fn={()=>changeUva("Chardonnay")} text="Chardonnay"/></div>
        <div><Button fn={()=>changeUva("Merlot")} text="Merlot"/></div>
        <div><Button fn={()=>changeUva("")} text="Todos"/></div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
