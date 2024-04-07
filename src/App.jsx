import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Film from "./pages/Film";
import Filter from "./pages/Filter";
import CinemaOne from "./pages/CinemaOne";
import ChangeTheme from "./pages/ChangeTheme";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/films-filters-cinematik-names/:slug",
          element: <Film />,
        },
        {
          path: "/filters-cinema/:slug",
          element: <Filter />,
        },
        {
          path: "/cinema/:slug/:id",
          element: <CinemaOne />,
        },
        {
          path: "/change-theme",
          element: <ChangeTheme />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
