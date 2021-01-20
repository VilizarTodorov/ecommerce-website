import React, { useState } from "react";
import Form from "../Form";
import FormTitle from "../FormTitle";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import Select from "./Select";
import Option from "./Option";
import ProductTypes from "./ProductTypes";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [mainImg, setMainImg] = useState("");

  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productType, setProductType] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(name, price, mainCategory, subCategory, productType);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormTitle title="add new product"></FormTitle>

      <Select value={mainCategory} onChange={(event) => setMainCategory(event.target.value)}>
        <Option value="men" content="men"></Option>
        <Option value="women" content="women"></Option>
        <Option value="kids" content="kids"></Option>
      </Select>

      {mainCategory && (
        <Select value={subCategory} onChange={(event) => setSubCategory(event.target.value)}>
          <Option value="shoes" content="shoes"></Option>
          <Option value="clothing" content="clothing"></Option>
          <Option value="accessories" content="accessories"></Option>
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

      <FormButton buttonContent="add product"></FormButton>
    </Form>
  );
};
export default AddProduct;
