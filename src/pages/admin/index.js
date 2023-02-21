import React from "react";
import "./index.css";
import logo from "../../assets/logo.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Outlet } from "react-router-dom";
import SideMenu from "./components/SideMenu/SideMenu.jsx";

const queryClient = new QueryClient();

const Admin = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <section className="admin">
        <header>
          <a href="/">
            <img
              src={logo}
              alt="EcoVanguard's club logo"
              className="admin__logo"
            />
          </a>
        </header>
        {/* <SideMenu /> */}
        <Outlet />
      </section>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default Admin;
