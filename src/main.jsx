import {} from "./index";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import withLazyComponent from "./components/lazyLoadHoc/index";
import {
  Page404,
  Gallery,
  Calendar,
  Admin,
  HomePage,
  About,
  SignIn,
  SignUp,
  Contact,
  Location,
  Donate,
  AdminPartner,
  AdminEvent,
  FormOption,
  FormContainer,
  FormContainer2,
  MembersData,
  AdminProject,
} from "./pages";

// lazy loaded routes
const Executive = withLazyComponent(
  lazy(() => import("./pages/Executive/executive"))
);
const Partner = withLazyComponent(lazy(() => import("./pages/partner")));

const Blog = withLazyComponent(lazy(() => import("./pages/Blog/blog")));

const Projects = withLazyComponent(
  lazy(() => import("./pages/projects/Projects"))
);
const AdminHome = withLazyComponent(
  lazy(() => import("./pages/admin/Pages/home"))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='home' element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='executives' element={<Executive />} />
          <Route path='blog/*' element={<Blog />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='about' element={<About />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='partners' element={<Partner />} />
          <Route path='contact' element={<Contact />} />
          <Route path='location' element={<Location />} />
          <Route path='donate' element={<Donate />} />
          <Route exact path='/donate' element={<Donate />} />
          <Route exact path='/projects' element={<Projects />} />
          {/* profile form pages  */}
          <Route exact path='/create_account' element={<FormOption />} />
          <Route
            exact
            path='/create_account/higher_institution'
            element={<FormContainer />}
          />
          <Route
            exact
            path='/create_account/secondary_school'
            element={<FormContainer2 />}
          />
          <Route path='*' element={<Page404 />} />
        </Route>
        {/* Admin page routes */}
        <Route path='admin' element={<Admin />}>
          <Route index element={<AdminHome />} />
          <Route path='data/*' element={<MembersData />} />
          <Route path='partners' element={<AdminPartner />} />
          <Route path='events' element={<AdminEvent />} />
          <Route path='projects' element={<AdminProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
