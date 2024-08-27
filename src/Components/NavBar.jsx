import CartWidget from "./CartWidget/CartWidget"

const NavBar =()=>{
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Celulares</a>
        <a className="nav-link" href="#">Tablets</a>
        <a className="nav-link" href="#">Notebooks</a>
        <a className="nav-link disabled" aria-disabled="true">Proximamente</a>
      </div>
    </div>
  </div>
  <CartWidget />
</nav>


    )
}
export default NavBar


/*
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
*/

