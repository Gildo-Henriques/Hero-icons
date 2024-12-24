
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Svgs from "./components/Svgs";

function Logos() {
  return (
    <main>
       <Hero/>
    <div className="w-full flex justify-center items-center">
      <Svgs />
    </div>
    <Footer/>
    </main>
    
  );
}
export default Logos;
