import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./layout/Index";
import Home from "./paginas/Home";
import Advisory from "./paginas/Advisory";
import Guests from "./paginas/Guests";
import PropertyOwners from "./paginas/PropertyOwners";
import Partnerships from "./paginas/Partnerships";
import Properties from "./paginas/Properties";
import AboutUs from "./paginas/AboutUs";
import Property from "./paginas/Property";

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home/>}/>
          <Route path="/advisory" element={<Advisory/>}/>
          <Route path="/guests" element={<Guests/>}/>
          <Route path="/propertyOwners" element={<PropertyOwners/>}/>
          <Route path="/partnerships" element={<Partnerships/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
        </Route>
        <Route path="/properties" element={<Index/>}>
          <Route index element={<Properties/>}/>
          <Route path="property/:idPropiedad" element={<Property/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
