import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Palette from "../pages/Palette";
import NewPalette from "../pages/NewPalette";
import ShadesPalette from "../pages/ShadesPalette";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/colorsapp",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/colorsapp/palette/new',
    element: <NewPalette />,
  },
  {
    path: '/colorsapp/palette/:id',
    element: <Palette />,
    errorElement: <ErrorPage />
  },
  {
    path: '/colorsapp/palette/:paletteId/:colorId',
    element: <ShadesPalette />,
    errorElement: <ErrorPage />
  }
]);

export default router