import { RouterProvider, createHashRouter } from "react-router-dom";
import SharedLayout from "/src/components/Shared/Layout/Layout";
import TrackingPage from "/src/pages/TrackingPage";
import FindwarehousePage from "/src/pages/FindwarehousePage";
import NotFoundPage from "/src/pages/NotFoundPage";

const Router = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <TrackingPage /> },
        { path: "dep", element: <FindwarehousePage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default Router;
