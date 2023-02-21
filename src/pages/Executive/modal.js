import React from "react";
import DialogComponent from "../../components/Dialog";
import "./modal.css";

// to ensure the image src passed as a prop from executive.js maintains a valid import in this file, I didn't create a folder for the modal.js and modal.css files
import ButtonLink from "./../../components/Button/button";

const ModalComponent = ({
  setAllStates,
  allStates: { executiveData, showModal },
}) => {
  const closeModal = () => {
    setAllStates((prevState) => {
      return {
        ...prevState,
        showModal: false,
      };
    });
  };
  let Alt = `${executiveData.position}, EcoVanguard club`;
  return (
    <>
      {showModal && (
        <DialogComponent
          label="EcoVanguard club's executives details"
          closeDialog={closeModal}
        >
          <div className="dialog__container">
            <div className="dialog__img">
              <img src={executiveData.src} alt={Alt} width={300} height={300} />
              {/* semantic styles from App.css: normal-weight... */}
              <h4 className="normal-weight disable-margin-top">{Alt}</h4>
            </div>
            <div className="dialog__details">
              {/* semantic styles from App.css: normal-weight... */}
              <h4 className="normal-weight disable-margin-top">
                {executiveData.name}
              </h4>
              <small>{executiveData.title} at University of Ibadan</small>
              <small>{executiveData.about}</small>
            </div>
          </div>
          <br />
          <div className="center">
            <ButtonLink onClick={closeModal}>Return</ButtonLink>
          </div>
        </DialogComponent>
      )}
    </>
  );
};

export default ModalComponent;
