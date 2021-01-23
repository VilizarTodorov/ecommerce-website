import React, { useState } from "react";
import Form from "../Form";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import FormTitle from "../FormTitle";
import GeneralButton from "../GeneralButton";
import Modal from "../Modal";
import ProductTypes from "../AddProduct/ProductTypes";
import Select from "../AddProduct/Select";
import Option from "../AddProduct/Option";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { fetchFailure, updateProduct, deleteProduct } from "../../Redux/ProductSlice/product-slice";

const isFetchingSelector = (state) => state.product.isFetching;

const AdminProduct = (props) => {
  const isFetching = useSelector(isFetchingSelector);
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [mainImg, setMainImg] = useState(props.mainImg);

  const [mainCategory, setMainCategory] = useState(props.mainCategory);
  const [subCategory, setSubCategory] = useState(props.subCategory);
  const [productType, setProductType] = useState(props.productType);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteProd = () => {
    dispatch(deleteProduct(mainCategory, props.id)).catch((err) => dispatch(fetchFailure(err.message)));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const updateData = {
      name,
      price,
      mainImg,
      mainCategory,
      subCategory,
      productType,
    };

    dispatch(updateProduct(updateData, props.id))
      .then(() => closeModal())
      .catch((err) => dispatch(fetchFailure(err.message)));
  };

  return (
    <div className="admin-product">
      <div style={{ backgroundImage: `url(${props.mainImg})` }} className="main-img"></div>
      <div className="product-info">
        <p className="info">{props.productType}</p>
        <p className="info">{props.name}</p>
        <p className="info">${props.price}</p>
      </div>
      <div className="controls">
        <GeneralButton onClick={deleteProd}>delete</GeneralButton>
        <GeneralButton onClick={openModal}>edit</GeneralButton>
      </div>
      <Modal hideModal={closeModal} isOpen={isOpen}>
        <Form onSubmit={onSubmit}>
          <FormTitle>edit product</FormTitle>

          <Select value={subCategory} onChange={(event) => setSubCategory(event.target.value)}>
            <Option value="shoes" content="shoes"></Option>
            <Option value="clothing" content="clothing"></Option>
            <Option value="accessories" content="accessories"></Option>
          </Select>

          <Select value={productType} onChange={(event) => setProductType(event.target.value)}>
            <ProductTypes mainCategory={mainCategory} subCategory={subCategory}></ProductTypes>
          </Select>

          <FormInput
            type="text"
            name="name"
            id={`${props.id}-name`}
            value={name}
            onChange={(event) => setName(event.target.value)}
            label="name"
          ></FormInput>

          <FormInput
            type="text"
            name="mainImg"
            id={props.id}
            value={mainImg}
            onChange={(event) => setMainImg(event.target.value)}
            label="main image"
          ></FormInput>

          <FormInput
            type="number"
            name="price"
            id={`${props.id}-price`}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            label="price"
          ></FormInput>

          <FormButton isFetching={isFetching}>edit product</FormButton>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProduct;
