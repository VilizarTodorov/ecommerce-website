import React, { useEffect, useState } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import SignOut from "../SignOut";
import Modal from "../Modal";
import AddProduct from "../AddProduct";
import GeneralButton from "../GeneralButton";
import { firestore } from "../../Firebase/firebase";
import AdminProduct from "../AdminProduct";
import { fetchFailure, setAll } from "../../Redux/ProductSlice/product-slice";
import "./styles.scss";

const selectFirstName = (state) => state.user.user.firstName;
const selectLastName = (state) => state.user.user.lastName;
const userNamesSelector = createSelector([selectFirstName, selectLastName], (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
});

const productListSelector = (state) => state.product.productList;

const Admin = () => {
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collection, setCollection] = useState("men");
  const userCredentials = useSelector(userNamesSelector);

  useEffect(() => {
    const listener = firestore.collection(collection).onSnapshot(
      (querySnapshot) => {
        dispatch(setAll(querySnapshot));
      },
      (err) => dispatch(fetchFailure(err.message))
    );

    return () => {
      listener();
    };
  }, [collection, dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
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
            <li>
              <GeneralButton onClick={() => setCollection("men")}>Men</GeneralButton>
            </li>
            <li>
              <GeneralButton onClick={() => setCollection("women")}>women</GeneralButton>
            </li>

            <li>
              <GeneralButton onClick={() => setCollection("kids")}>kids</GeneralButton>
            </li>
            <li className="aside-nav-option">
              <SignOut></SignOut>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="items">
        <GeneralButton onClick={openModal}>add new product</GeneralButton>
        <Modal hideModal={closeModal} isOpen={isModalOpen}>
          <AddProduct></AddProduct>
        </Modal>
        <ul className="items-list">
          {productList.map(({ id, mainCategory, price, mainImg, name, productType, subCategory }) => (
            <AdminProduct
              key={id}
              id={id}
              mainCategory={mainCategory}
              subCategory={subCategory}
              mainImg={mainImg}
              productType={productType}
              name={name}
              price={price}
            ></AdminProduct>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Admin;
