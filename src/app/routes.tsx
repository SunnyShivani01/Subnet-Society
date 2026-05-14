import { createBrowserRouter } from "react-router";
import { Hero } from "./components/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Hero,
  },
]);
