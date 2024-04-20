import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/App.scss";

import RootPage from "@/pages/RootPage";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: []
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;