import { Outlet } from "react-router";
import { ColorProvider, useColors } from "../ColorContext";

const LayoutWithStyle = () => {
  const { colors } = useColors();

  return (
    <>
      <style>{`
        body { background-color: ${colors.body}; }
        header, footer, .sidebar, .main, .colors {
          box-shadow: 1px 1px 4px 1px, -1px -1px 4px 1px ${colors.header};
        }
      `}</style>
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
