import CartWidget from "./CartWidget/CartWidget"
const NavBar =()=>{
    return (
<nav>
    <h3>EcommerceVite</h3>
    <div>
        <button>Celulares</button>
        <button>Tablets</button>
        <button>Notebooks</button>
    </div>
    <CartWidget />
</nav>
    )
}
export default NavBar