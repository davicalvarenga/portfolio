import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-grow px-5 md:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
