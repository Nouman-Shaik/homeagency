import Home from "./components/pages/Home"
import Service from "./components/pages/Service"
import About from "./components/pages/About"
import Footer from "./components/pages/Footer"
import Testimonials from "./components/pages/Testimonials"




function App() {
  return (
    <div>
      <div id="Home">
        <Home />
      </div>
     <div id="Service">
      <Service />
      </div>
      <div id="About">
      <About />
      </div>
      <div id='Testimonials'>
      <Testimonials />
      </div>
      <div id="Footer">
      <Footer />
      </div>
      
    </div>
  )
}

export default App


