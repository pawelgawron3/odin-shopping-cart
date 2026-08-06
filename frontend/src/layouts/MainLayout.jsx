import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";
import BrandSupport from "../components/layout/BrandSupport";
import Footer from "../components/layout/Footer";

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
