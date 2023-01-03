import Menu from "./Menu";
import { Outlet } from "react-router-dom";
function MainLayout() {
  return (
    <>
      <Menu />
      <Outlet></Outlet>
    </>
  );
}

export default MainLayout;
