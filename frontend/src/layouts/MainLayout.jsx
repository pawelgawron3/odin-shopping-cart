import { Outlet } from "react-router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import BrandSupport from "../components/BrandSupport";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <BrandSupport />
      <Footer />
    </>
  );
}
