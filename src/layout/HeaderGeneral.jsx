import React from 'react'

const HeaderGeneral = ({pagina}) => {
    return (
        <>
            <header className=" hero">
                <div className=" bg-zinc-900 bg-opacity-60 py-16 " >
                    <img className="w-4/6 m-auto lg:w-4/12 " src="/images/logo_4.png" alt="logo-marketoakconsult" />
                    <div className="text-center w-8/12 m-auto ">
                        <h1 className="text-xl text-white md:text-4xl font-bold fuenteSecundaria tracking-wider">{pagina}</h1>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderGeneral