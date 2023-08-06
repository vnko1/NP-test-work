import { Outlet } from "react-router-dom";

import Container from "@mui/material/Container";

import ApplicationBar from "/src/components/Shared/ApplicationBar/ApplicationBar";

const SharedLayout = () => {
  return (
    <>
      <ApplicationBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
