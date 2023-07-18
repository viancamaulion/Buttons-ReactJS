import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';


//Product images
import prod1 from './images/Phone holder.png';
import prod2 from './images/Storage Box.png';
import prod3 from './images/Nightstand.png';
import prod4 from './images/Blackout Curtains.png';
import prod5 from './images/Mirror.png';
import prod6 from './images/Tissue Box.png';
import prod7 from './images/Scented Candles.png';
import prod8 from './images/Wooven Rattan Rug.png';

function App() {
  return (
  <div>
    <Navbar/>
    <h1 className='websiteTitle'>Closet & Things by Via Co.</h1>
    <h2>Manila, Philippines</h2>

    <div className="App">
      <Product
        img = {prod1}
        name = "Phone Holder"
        desc = "The material is environmentally friendly, the edge is smooth and burr-free, and is very safe."
        price ="₱89.00"
      />

      <Product
        img = {prod2}
        name = "Storage Box"
        desc = "Japanese Style Storage Box Muji Shelf Organizer Plastic Container Box with Lid COD Sundries Storage."
        price ="₱90.99"
      />

      <Product
        img = {prod3}
        name = "Nightstand"
        desc = "Elegant Bedside And Coffee Side Wooden Table Nightstand With Drawer And Desk Shelves."
        price ="₱1,899.99"
      />

      <Product
        img = {prod4}
        name = "Blackout Curtains"
        desc = "Elegant Korean Block Out Curtain Blockout curtain hollermall."
        price ="₱290.99"
      />

      <Product
        img = {prod5}
        name = "Wooden Mirror"
        desc = "360 Degree Portable Adjustable Table Desk Mirror Stand Bathroom Living Room."
        price ="₱49.99"
      />

      <Product
        img = {prod6}
        name = "Tissue Box"
        desc = "Nordic Wooden Tissue Box Bathroom Table Tissue Case Container Towel Napkin Tissue Holder."
        price ="₱249.99"
      />

      <Product
        img = {prod7}
        name = "Scented Candles"
        desc = "Made with naturally biodegradable and eco-friendly pure soy wax."
        price ="₱79.99"
      />

      <Product
        img = {prod8}
        name = "Wooven Rattan Rug"
        desc = "Nordic Minimalist Aesthetic Woven Rattan Decorative Color Block Room Rug."
        price ="₱279.99"
      />
    </div>

    <Footer/>
  </div>
  );

}

export default App;