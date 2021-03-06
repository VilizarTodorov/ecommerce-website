import React, { useEffect, useState } from "react";
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
import Grid from "../Grid";
import "./styles.scss";
import { namesSelector, productListSelector } from "../../helpers/selectors";
import { withAuthorizationFunction } from "../../HOC";

const Admin = () => {
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collection, setCollection] = useState("men");
  const userCredentials = useSelector(namesSelector);

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
        {/* <ul className="items-list"> */}
        <Grid>
          {productList.map(
            ({ id, mainCategory, mainImg, name, otherColors, price, productType, secondaryImg, subCategory }) => (
              <AdminProduct
                key={id}
                id={id}
                mainCategory={mainCategory}
                mainImg={mainImg}
                name={name}
                otherColors={otherColors}
                price={price}
                productType={productType}
                secondaryImg={secondaryImg}
                subCategory={subCategory}
              ></AdminProduct>
            )
          )}
        </Grid>
        {/* </ul> */}
      </section>
    </div>
  );
};

const condition = (user) => {
  if (user) {
    return user.roles.includes("admin");
  }

  return false;
};

export default withAuthorizationFunction(condition)(Admin);
