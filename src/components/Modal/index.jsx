import React from "react";
import "./styles.scss";

const Modal = ({ children, hideModal, styles, isOpen, className }) => {
  return (
    <div
      className={`overlay ${isOpen ? "active" : ""} ${className ? className : ""}`}
      onClick={hideModal}
      style={styles}
    >
      <div onClick={(event) => event.stopPropagation()} className="content">
        <i onClick={hideModal} className="fas fa-times fa-lg exit"></i>
        {children}
      </div>
    </div>
  );
};

export default Modal;
