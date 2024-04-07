import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function RootLayout() {
  return (
    <>
      <header className="bg-base-100 shadow-2xl">
        <Navbar />
      </header>
      <div className="bg-base-200 shadow-xl">
        <Nav />
      </div>
      <main className="max-container grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
