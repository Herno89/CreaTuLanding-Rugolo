const base_de_datos = [
    {
        nombre: "Cabernet Sauvignon - Viña Solaria",
        uva: "Cabernet Sauvignon",
        precio: "25.50",
        img: "https://borrachines.com.ar/wp-content/uploads/2021/11/Primeras-Vinas-Vino-Cabernet-Sauvignon-01-Mercado.png"
    },
    {
        nombre: "Chardonnay - Casa Blanca",
        uva: "Chardonnay",
        precio: "18.00",
        img: "./img/chardonnay-gran-reserva-vina-casas-del-bosque-valle-de-casablanca.webp"
    },
    {
        nombre: "Merlot - Valle Sereno",
        uva: "Merlot",
        precio: "22.75",
        img: "https://images.vivino.com/thumbs/u03pak6qRtmzfJUuZLcvqA_375x500.jpg"

    },
    {
        nombre: "Sauvignon Blanc - Viñedos del Cielo",
        uva: "Sauvignon Blanc",
        precio: "20.50",
        img: "https://vinoselcielo.com/cdn/shop/files/vino-blanco-cassiopea-424530_800x.jpg?v=1727294065"
    },
    {
        nombre: "Pinot Noir - Montes Rojos",
        uva: "Pinot Noir",
        precio: "30.00",
        img: "https://acdn.mitiendanube.com/stores/001/214/080/products/diseno-sin-titulo-21-3db3e288e6ac78f8af17018918139207-640-0.png"
    },
    {
        nombre: "Malbec - Finca Andina",
        uva: "Malbec",
        precio: "27.25",
        img: "https://cdn.shopify.com/s/files/1/0566/4391/1854/products/7802940031259_250422_1224f099-f3c9-4188-b6fd-cc9a88fd4a5d.png?v=1651008362"
    }
]

export const getProducts = ()=>{
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res(base_de_datos);
            rej("error")
        },1000);
    });
}

export const getProductsByCategory = (uva)=>{
    return new Promise((res,rej) =>{
        setTimeout(() => {
            res(base_de_datos.filter(e=> e.uva === uva));
            rej("error")
        },1000);
    });
}


