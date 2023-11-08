import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Home from "./components/Home.jsx";
import { FloatButton } from "antd";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  HomeFilled,
} from "@ant-design/icons";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home setCurrentPage={setCurrentPage} />,
        },
        {
          path: "/landing-page-1",
          element: <Page1 />,
        },
        {
          path: "/landing-page-2",
          element: <Page2 />,
        },
      ],
    },
  ]);

  useEffect(() => {
    const currentRoute = window.location.pathname;
    const routeParts = currentRoute.split("-");
    const value = routeParts[routeParts.length - 1];
    setCurrentPage(value !== "/" ? parseInt(value) : value);
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 74 }}
        icon={<CaretLeftOutlined />}
        onClick={() => {
          document.getElementById("left").click();
        }}
        disabled={typeof currentPage !== "number" || currentPage === 1}
      />
      <a id="left" className="d-none" href={`landing-page-${currentPage - 1}`}>
        Anchor
      </a>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 24 }}
        icon={<CaretRightOutlined />}
        onClick={() => {
          document.getElementById("right").click();
        }}
        disabled={typeof currentPage !== "number" || currentPage === 2}
      />
      <a id="right" className="d-none" href={`landing-page-${currentPage + 1}`}>
        Anchor
      </a>
      <FloatButton
        shape="circle"
        type="default"
        style={{ right: 125 }}
        icon={<HomeFilled />}
        onClick={() => {
          document.getElementById("home").click();
        }}
      />
      <a id="home" className="d-none" href={`/`}>
        Anchor
      </a>
    </>
  );
}

export default App;
