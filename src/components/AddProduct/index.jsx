import React, { useState } from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import Select from "./Select";
import Option from "./Option";
import ProductTypes from "./ProductTypes";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchFailure } from "../../Redux/ProductSlice/product-slice";

const isFetchingSelector = (state) => state.product.isFetching;

const AddProduct = () => {
  const isFetching = useSelector(isFetchingSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [mainImg, setMainImg] = useState("");

  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productType, setProductType] = useState("");

  const clearForm = () => {
    setName("");
    setPrice(0);
    setMainImg("");
    setSubCategory("");
    setMainCategory("");
    setProductType("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      price,
      mainImg,
      mainCategory,
      subCategory,
      productType,
    };

    dispatch(addProduct(product))
      .then(() => clearForm())
      .catch((err) => dispatch(fetchFailure(err.message)));
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormTitle>add new product</FormTitle>

      <Select value={mainCategory} onChange={(event) => setMainCategory(event.target.value)}>
        <Option value="men">men</Option>
        <Option value="women">women</Option>
        <Option value="kids">kids</Option>
      </Select>

      {mainCategory && (
        <Select value={subCategory} onChange={(event) => setSubCategory(event.target.value)}>
          <Option value="shoes">shoes</Option>
          <Option value="clothing">clothing</Option>
          <Option value="accessories">accessories</Option>
        </Select>
      )}

      {subCategory && (
        <Select value={productType} onChange={(event) => setProductType(event.target.value)}>
          <ProductTypes mainCategory={mainCategory} subCategory={subCategory}></ProductTypes>
        </Select>
      )}

      <FormInput
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        label="name"
      ></FormInput>

      <FormInput
        type="text"
        name="mainImg"
        id="mainImg"
        value={mainImg}
        onChange={(event) => setMainImg(event.target.value)}
        label="main image"
      ></FormInput>

      <FormInput
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        label="price"
      ></FormInput>

      <FormButton isFetching={isFetching}>add product</FormButton>
    </Form>
  );
};
export default AddProduct;
