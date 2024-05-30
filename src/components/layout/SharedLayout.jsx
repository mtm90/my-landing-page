import { Outlet } from "react-router";
import { ColorProvider, useColors } from "../ColorContext";

const LayoutWithStyle = () => {
  const { colors } = useColors();

  return (
    <>
      <style>{`body { background-color: ${colors.body}; }`}</style>
      <Outlet />
    </>
  );
};

const SharedLayout = () => {
  return (
    <ColorProvider>
      <LayoutWithStyle />
    </ColorProvider>
  );
};

export default SharedLayout;
