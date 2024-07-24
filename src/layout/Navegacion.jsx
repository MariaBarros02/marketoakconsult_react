import { Link } from "react-router-dom"
import { useEffect } from "react";
function Navegacion() {


  useEffect(() => {
    const btnMenu = document.querySelector('#btn-menu');
    const menu = document.querySelector('#menu');

    const handleMenuToggle = (e) => {
      e.preventDefault();
      if (menu) {
        menu.classList.toggle('hidden');
      }
    };

    if (btnMenu) {
      btnMenu.addEventListener('click', handleMenuToggle);
    }

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      if (btnMenu) {
        btnMenu.removeEventListener('click', handleMenuToggle);
      }
    };
  }, []);




  return (
    <>
      <div className="bg-zinc-900 text-white flex flex-col lg:flex-row lg:justify-between lg:items-center lg:px-2 ">
        <div className="m-auto lg:m-0 ">
          <div className="hidden lg:block">
            <img className=" w-16" src="images/logo_1.png" alt="logo" />
          </div>
          <div className="text-4xl py-3 lg:hidden " id="btn-menu">
            <a href="/" >☰</a>
          </div>

        </div>
        <nav className="hidden  flex-col lg:flex lg:flex-row" id="menu">
          <Link className="navegacion__link" to="/">Home</Link>
          <Link className="navegacion__link" to="/advisory">Advisory</Link>
          <Link className="navegacion__link" to="/guests">Guests</Link>
          <Link className="navegacion__link" to="/propertyOwners">Property Owners</Link>
          <Link className="navegacion__link" to="/partnerships">Partnerships</Link>
          <Link className="navegacion__link" to="/properties">Properties</Link>
          <Link className="navegacion__link" to="/aboutUs">About Us</Link>

        </nav>
      </div>
    </>
  )
}

export default Navegacion