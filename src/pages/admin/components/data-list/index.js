import {
  List,
  Datagrid,
  EmailField,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
  ExportButton,
  TextInput,
} from "react-admin";
import logo from "../../../../assets/logo.svg";
// using SVGs as React components
import { ReactComponent as EditIcon } from "../../../../assets/admin-edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/admin-delete-icon.svg";
const DataList = () => {
  return (
    <List
      actions={<CustomExportButton />}
      title="EcoAdmin"
    >
      <Datagrid style={{ borderRadius: "30px" }}>
        <img src={logo} alt="a thing" width={60} height={60} />
        <TextField source="name" />
        <EmailField source="email" />
        <NumberField source="Phone Number" />
        <NumberField source="Age Range" />
        <span>24</span>
        <TextField source="Institution" />
        <TextField source="Faculty" />
        <TextField source="Department" />
        <CustomEditButton />
        <CustomDeleteButton />
      </Datagrid>
    </List>
  );
};
const CustomEditButton = () => {
  return <EditButton label="" icon={<EditIcon />}></EditButton>;
};
const CustomDeleteButton = () => {
  return <DeleteButton label="" icon={<DeleteIcon />}></DeleteButton>;
};
const CustomExportButton = () => {
  return (
    <ExportButton
      sx={{
        textTransform: "capitalize",
        padding: "12px 20px",
        color: "inherit",
        fontFamily: "Poppins",
        fontSize: "inherit",
      }}
    />
  );
};
const Filters = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
export default DataList;
