import React from "react";
import InputComponent from "../../../../components/Input/input";
import "./index.css";
import DayPickerComponent from "./../../../../components/date-picker/index";

const AdminEvent = () => {
  const [inputDate, setInputDate] = React.useState("");
  const [modalState, setModalState] = React.useState(false);
  const CustomInput = ({ value, onChange, onClick }) => (
    <InputComponent
      placeholder="Select Date to add/see events"
      type="text"
      className="events__input"
      bgImage="search.svg"
      onClick={onClick}
      readOnly
      value={value}
    />
  );
  return (
    <>
      <h1>Events</h1>
      <div className="center">
        <CustomInput value={inputDate} onClick={() => setModalState(true)} />
        <DayPickerComponent
          setInputDate={setInputDate}
          showModal={modalState}
          setShowModal={setModalState}
        />
      </div>
    </>
  );
};

export default AdminEvent;
