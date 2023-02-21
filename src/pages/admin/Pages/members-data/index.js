import "./index.css";
import jsonServerProvider from "ra-data-json-server";
import DataList from "../../components/data-list/index";
import { Admin as EcoAdmin, Resource } from "react-admin";
import SignIn from "./../../../SignIn/index";
import Page404 from "./../../../404/page404";
import SideMenu from "./../../components/SideMenu/SideMenu";
// import { createMuiTheme } from "@material-ui/core/styles";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const MembersData = () => {
  return (
    <>
      <h1>Members' data</h1>
      <section className="members__data">
        <EcoAdmin
          // theme={myTheme}
          // appLayout={Home}
          dataProvider={dataProvider}
          basename="/admin/data"
          title="EcoAdmin"
          dashboard={SideMenu}
          disableTelemetry
          // menu={SideMenu}
          catchAll={Page404}
          // authProvider={SignIn}
          requireAuth
          loginPage={SignIn}
        >
          <Resource name="users" list={DataList} />
        </EcoAdmin>
      </section>
    </>
  );
};
// const myTheme = createMuiTheme({
//   palette: {
//     // primary: indigo,
//     // secondary: pink,
//     // error: red,
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
//   typography: {
//     // Use the system font instead of the default Roboto font.
//     fontFamily: ["Poppins", "sans-serif"].join(","),
//   },
//   overrides: {
//     MuiButton: {
//       // override the styles of all instances of this component
//       root: {
//         // Name of the rule
//         color: "white", // Some CSS
//       },
//     },
//   },
// });

export default MembersData;
