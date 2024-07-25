import HeaderPrincipal from "../layout/HeaderPrincipal"
import BannerBeyond from "../layout/BannerBeyond"

const Guests = () => {
  return (
    <>
      <HeaderPrincipal
        
      />
      <section className="bg-gray-200 py-10">
        <div className="w-10/12 m-auto grid grid-cols-1 gap-5 items-center md:grid-cols-3">
          <img className="rounded-full " src="/images/image_3.jpg" alt="guests" />
          <div className=" text-center md:text-left md:col-span-2">
            <h2 className="text-4xl font-bold uppercase mb-3  lg:text-6xl">Welcome, <span className="text-cyan-600">Guests!</span></h2>
            <p>We are delighted to offer
              you the perfect home away from home. Whether you're here for business, pleasure, or a bit of
              both,
              our properties provide you with unparalleled comfort and convenience.
              At Marketoak, we are delighted to offer you the perfect home away from home. Whether you're
              here for business, pleasure, or a bit of both, our properties provide you with unparalleled
              comfort
              and convenience.Ready to experience the best in short-term stays? Take a look at our properties
              here
              and book your stay today!
            </p>
          </div>

        </div>

      </section>

      <section class="seccionVentajas">
        <h2 class="seccionVentajas__titulo">Enjoy Unmatched <span class="texto-azul"> Comfort</span> and <span
          class="texto-azul">Convenience</span></h2>
        <div class="seccionVentajas__contenido">
          <div class="seccionVentajas__contenido--div  seccionA">
            <div class="seccionVentajas__img">
              <img src="/images/image_4.jpg"/>
            </div>
            <div class="seccionVentajas__contenido--texto  ">
              <p class="seccionVentajas__subtitulo">Prime Locations</p>
              <p>
                Our properties are situated in the best areas, so you're always close to
                the action. Whether you're looking to explore vibrant city centers, relax on picturesque
                beaches, or experience the charm of quaint neighborhoods, our locations put you right where
                you want to be. Enjoy easy access to popular attractions, dining hotspots, shopping centers,
                and public transportation. You'll never miss a beat with our strategically placed properties
                that make it convenient for you to enjoy everything the area has to offer.
              </p>
            </div>

          </div>
          <div class="seccionVentajas__contenido--div seccionB">

            <div class="seccionVentajas__img">
              <img src="/images/image_5.jpg"/>
            </div>
            <div class="seccionVentajas__contenido--texto seccionB__texto ">
              <p class="seccionVentajas__subtitulo">Top-notch Amenities </p>
              <p>
                Enjoy high-speed Wi-Fi, fully equipped kitchens, comfortable beds, and
                more. We understand that the little things can make a big difference in your stay. That's
                why we ensure our properties are furnished with everything you need to feel right at home.
                Connect seamlessly with our high-speed Wi-Fi, perfect for both work and entertainment.
                Prepare your favorite meals in our modern kitchens equipped with all the necessary
                appliances and utensils. Rest easy on our plush beds designed for a restful night's sleep.
                Additionally, many of our properties feature extras such as private balconies, swimming
                pools, fitness centers, and parking facilities to enhance your stay.
              </p>
            </div>

          </div>
        </div>
        <div class="seccionVentajas__contenido">
          <div class="seccionVentajas__contenido--div seccionC">
            <div class="seccionVentajas__img">
              <img src="/images/image_6.jpg"/>
            </div>
            <div class="seccionVentajas__contenido--texto ">
              <p class="seccionVentajas__subtitulo">Flexibility</p>
              <p>
                We offer flexible booking options to suit your schedule. We know that travel plans can
                change, and we strive to provide the flexibility you need. Whether you require a short stay
                for a few days or an extended stay for several weeks or months, we have options that cater
                to your unique needs. Our user-friendly booking system makes it easy to reserve your stay,
                modify your dates, or extend your visit with just a few clicks. Plus, our competitive
                pricing and special offers ensure that you get the best value for your money.
              </p>
            </div>

          </div>
          <div class="seccionVentajas__contenido--div seccionD">

            <div class="seccionVentajas__img">
              <img src="/images/image_7.jpg"/>
            </div>
            <div class="seccionVentajas__contenido--texto seccionB__texto ">
              <p class="seccionVentajas__subtitulo">Personalized Service</p>
              <p>
                Our friendly staff is always here to assist you and ensure you have a pleasant stay. We take
                pride in offering personalized service that goes above and beyond. From the moment you book
                your stay, our dedicated team is available to answer your questions, provide local insights,
                and assist with any special requests. Need help with transportation, restaurant
                reservations, or planning activities? Just ask! We're here to make your stay as comfortable
                and enjoyable as possible. Our commitment to excellent customer service ensures that you
                feel valued and well-cared-for throughout your stay.
              </p>
            </div>

          </div>
        </div>
      </section>

      <BannerBeyond />
    </>
  )
}

export default Guests