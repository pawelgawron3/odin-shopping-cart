import "../styles/reset.css";
import Header from "./Header";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import ShopByCategory from "./ShopByCategory";
import WhyChooseVelora from "./WhyChooseVelora";
import BrandSupport from "./BrandSupport";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <HeroCarousel></HeroCarousel>
      <ShopByCategory></ShopByCategory>
      <WhyChooseVelora></WhyChooseVelora>
      <BrandSupport></BrandSupport>
      <Footer></Footer>
    </>
  );
}
export default App;
