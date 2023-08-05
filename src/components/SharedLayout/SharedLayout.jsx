import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <h1>SHARED</h1>
      <Outlet />
    </>
  );
};

export default SharedLayout;
