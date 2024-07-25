import HeaderPrincipal from "../layout/HeaderPrincipal"
import Footer from "../layout/Footer"
import BannerBeyond from "../layout/BannerBeyond"
const Advisory = () => {
  return (
    <>
      <HeaderPrincipal/>
      <section className="bg-gray-200 py-10">
        <div className="w-10/12 m-auto grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          <img src="/images/image_20.jpg" alt="advisory" className="rounded-full w-3/6 m-auto lg:col-start-2" />
          <div className="row-start-1 text-center md:text-left" >
            <h2 className="text-4xl font-bold uppercase mb-3 lg:text-6xl "><span className="text-rose-600">Advisory</span> Services</h2>
            <p className="">Welcome to our Advisory Services section, where we
              provide expert guidance in two crucial areas:
              Credit Advisory and Business Creation Advisory. Whether you're looking to secure financing or
              launch a new business, our experienced advisors are here to help you achieve your goals.</p>
          </div>


        </div>
      </section>
      <section className="bg-zinc-950 py-10">
        <div className="w-10/12 m-auto">
          <p className="text-white text-center">Our Credit Advisory service is designed to help you navigate the
            complexities of securing financing.
            With our expertise, you can understand your credit options, improve your credit score and find the
            best loan products to meet your needs. Here are some important aspects of our Credit Advisory
            service
          </p>
        </div>
      </section>
      <section className="banner banner--bg_3 ">
        <div className=" bg-gray-600 bg-opacity-50 py-10">
          <div className="w-10/12 m-auto">
            <div className="text-center">
              <p className="py-4 px-8 text-4xl font-bold rounded-full bg-white inline-block">1</p>
              <div  className="bg-zinc-950 text-white p-5 pt-10 -mt-8 w-4/12 m-auto">
                <h3 className="text-xl font-bold tracking-widest">CREDIT SCORE ANALYSIS</h3>
                <p className="text-lg leading-tight">We provide a detailed analysis of your current credit score and offer personalized advice on how to improve it.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
      <BannerBeyond />
      <Footer />
    </>
  )
}

export default Advisory