import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Similar from "./components/Similar";
import Interest from "./components/Interest";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductDetail />
      <Similar />
      <Interest />
      <Subscribe />
      <Footer />
    </>
  );
}
