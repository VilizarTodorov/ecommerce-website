import React from "react";
import "./styles.scss";

const Modal = ({ children, hideModal, styles, isOpen, className }) => {
  return (
    <div
      className={`overlay ${isOpen ? "active" : ""} ${className ? className : ""}`}
      onClick={hideModal}
      style={styles}
    >
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;
