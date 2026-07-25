import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  );
}

export default RootLayout;
