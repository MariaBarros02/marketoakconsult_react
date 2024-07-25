import Navegacion from "./Navegacion";

function HeaderPrincipal() {
    return (
        <>
            <header className=" hero ">
                <div className=" bg-zinc-900 bg-opacity-70 text-white m-auto py-16 " >
                    <Navegacion/>
                    <img className="w-4/6 m-auto lg:w-4/12 " src="/images/logo_4.png" alt="logo-marketoakconsult" />
                    <div className="text-center w-8/12 m-auto ">
                        <h1 className="text-xl md:text-4xl font-bold  tracking-wider">Discover the pleasure of staying well</h1>

                    </div>

                </div>

            </header>
        </>
    )
}

export default HeaderPrincipal;