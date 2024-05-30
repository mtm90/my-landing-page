import { Outlet } from "react-router";
import { ColorProvider } from "../ColorContext";

const SharedLayout = () => {
  return (
    <ColorProvider>
      <Outlet />
    </ColorProvider>
  );
};

export default SharedLayout;
