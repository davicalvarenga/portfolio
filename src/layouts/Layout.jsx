import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-grow px-4 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
