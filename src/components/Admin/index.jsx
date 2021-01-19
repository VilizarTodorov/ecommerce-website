import React, { useState } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import SignOut from "../SignOut";
import "./styles.scss";
import Modal from "../Modal";
import Form from "../Form";
import FormTitle from "../FormTitle";

const selectFirstName = (state) => state.user.user.firstName;
const selectLastName = (state) => state.user.user.lastName;
const userNamesSelector = createSelector([selectFirstName, selectLastName], (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
});

const Admin = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userCredentials = useSelector(userNamesSelector);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="admin">
      <aside className="aside">
        <header className="aside-header">
          <i className="far fa-user-circle fa-4x"></i>
          <h2>{`${userCredentials.firstName} ${userCredentials.lastName}`}</h2>
        </header>
        <nav className="aside-nav">
          <ul>
            <li className="aside-nav-option">
              <Link to={HOME}>HOME</Link>
            </li>
            <li className="aside-nav-option">
              <SignOut></SignOut>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="items">
        <button onClick={openModal}>add product</button>
        <Modal hideModal={closeModal} isOpen={isModalOpen}>
          <Form>
            <FormTitle title="add product"></FormTitle>
          </Form>
        </Modal>
      </section>
    </div>
  );
};

export default Admin;
