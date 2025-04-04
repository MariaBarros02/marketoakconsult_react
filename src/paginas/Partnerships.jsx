import HeaderPrincipal from "../layout/HeaderPrincipal"
import BannerBeyond from "../layout/BannerBeyond"
import Footer from "../layout/Footer"
const Partnerships = () => {
  return (
    <>
      <HeaderPrincipal
        imagen="5"
      />
      <section className="py-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold uppercase mb-5 lg:text-7xl tracking-wider">Partnerships</h2>
          <p className="w-10/12 lg:w-6/12 m-auto">We are part of a nationwide corporate housing network with over hundreds of properties combined with over a hundred direct partners and a group of coaches.</p>
          <img className="w-1/6 m-auto my-5" src="/images/beyond.png" alt="logo-beyond"/>
        </div>
        

      </section>


      <section className="bg-zinc-200 py-48">
        <div className="w-10/12 m-auto text-center text-zinc-400 text-lg  lg:w-8/12">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings icono-rotacion m-auto" width="150" height="150" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c0c0c0" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          <p>This section of the page is currently under construction. We're working hard to bring you more content
            soon. Stay tuned for updates and exciting new features!

          </p>

        </div>

      </section>

      <Footer/>

    </>

  )
}

export default Partnerships