import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="main-container">
      <Header />
      <div id="container">{<Outlet />}</div>
    </div>
  );
}

export default Layout;
