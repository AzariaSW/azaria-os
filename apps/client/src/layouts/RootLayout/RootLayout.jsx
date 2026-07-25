import { Outlet } from "react-router-dom";

import Main from "./components/Main";
import "./RootLayout.css";

function RootLayout() {
  return (
    <div className="root-layout">
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default RootLayout;
