import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Footer from "./components/Footer"
import "./style.scss"
import Header from "./components/Header";
import React from "react";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Search from "./pages/Search";
import SearchStudents from "./pages/SearchStudents";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/student/:id",
        element: <Single />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/feedback",
        element: <Feedback />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/searchstudents",
        element: <SearchStudents />
      },
      {
        path: "/about",
        element: <About />
      },]
  }
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
