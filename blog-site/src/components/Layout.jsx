import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="overlay"></div>
      <main className="layout-content">
        <Outlet /> {/* This renders the page content (Home, Create, Signup, Login) */}
      </main>
    </div>
  );
}

export default Layout;