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
import GeneralButton from "../GeneralButton";
import "./styles.scss";
import { isProductFetchingSelector } from "../../helpers/selectors";

const AddProduct = () => {
  const isFetching = useSelector(isProductFetchingSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [mainImg, setMainImg] = useState("");
  const [secondaryImg, setSecondaryImg] = useState("");

  const [otherColors, setOtherColors] = useState([]);

  const handleChange = (i, event) => {
    event.preventDefault();
    event.stopPropagation();

    const colors = [...otherColors];
    colors[i].value = event.target.value;
    setOtherColors(colors);
  };

  const addNewColor = () => {
    const colors = [...otherColors];
    colors.push({ value: "" });
    setOtherColors(colors);
  };

  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productType, setProductType] = useState("");

  const clearForm = () => {
    setName("");
    setPrice(0);
    setMainImg("");
    setSecondaryImg("");
    setSubCategory("");
    setMainCategory("");
    setProductType("");
    setOtherColors([]);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      price: +price,
      mainImg,
      secondaryImg,
      otherColors,
      mainCategory,
      subCategory,
      productType,
    };

    dispatch(addProduct(product))
      .then(() => clearForm())
      .catch((err) => dispatch(fetchFailure(err.message)));
  };

  return (
    <div className="add-product">
      <Form onSubmit={onSubmit}>
        <FormTitle>add new product</FormTitle>

        <Select
          value={mainCategory}
          onChange={(event) => setMainCategory(event.target.value)}
          initialValue="main category"
        >
          <Option value="men">men</Option>
          <Option value="women">women</Option>
          <Option value="kids">kids</Option>
        </Select>

        {mainCategory && (
          <Select
            value={subCategory}
            onChange={(event) => setSubCategory(event.target.value)}
            initialValue="sub category"
          >
            <Option value="shoes">shoes</Option>
            <Option value="clothing">clothing</Option>
            <Option value="accessories">accessories</Option>
          </Select>
        )}

        {subCategory && (
          <Select
            value={productType}
            onChange={(event) => setProductType(event.target.value)}
            initialValue="product type"
          >
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
          type="text"
          name="secondaryImg"
          id="secondaryImg"
          value={secondaryImg}
          onChange={(event) => setSecondaryImg(event.target.value)}
          label="secondary image"
        ></FormInput>

        {otherColors.map((x, index) => (
          <FormInput
            key={index}
            type="text"
            name={`${index}otherColor`}
            id={`${index}otherColor`}
            value={x.value}
            onChange={(event) => handleChange(index, event)}
            label="additional color"
          ></FormInput>
        ))}

        <GeneralButton onClick={(event) => addNewColor(event)}>add new color</GeneralButton>

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
    </div>
  );
};
export default AddProduct;
