import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayout from "/src/components/SharedLayout/SharedLayout";
import TrackingPage from "/src/pages/TrackingPage";
import DepartmentsPage from "/src/pages/DepartmentsPage";
import NotFoundPage from "/src/pages/NotFoundPage";

const Router = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          { index: true, element: <TrackingPage /> },
          { path: "/dep", element: <DepartmentsPage /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
    { basename: "/np-test-work" }
  );
  return <RouterProvider router={router} />;
};
export default Router;
