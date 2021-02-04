import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFailure, getSpecificProduct } from "../../Redux/ProductSlice/product-slice";
import Carousel from "../Carousel";
import Slide from "../CarouselSlide";
import GeneralButton from "../GeneralButton";
import SpecificProductSize from "../SpecificProductSize";
import "./styles.scss";

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

const productSelector = (state) => state.product.product;

const SpecificProduct = () => {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productSelector);

  const [imgSrc, setImgSrc] = useState("");
  const [size, setSize] = useState(0);

  useEffect(() => {
    dispatch(getSpecificProduct(category, id))
      .then((doc) => setImgSrc(doc.data().otherColors[2].value))
      .catch((err) => fetchFailure(err.message));
  }, [category, id, dispatch]);

  const onMouseOverHandler = (value) => {
    if (value) {
      setImgSrc(value);
    }
  };

  const onMouseOutHandler = () => {
    setImgSrc(product.mainImg);
  };

  if (!product) {
    return <div>...Loading</div>;
  }

  return (
    <div className="specific-product-container">
      <div className="specific-product">
        <div className="info">
          <h1>{product.name}</h1>
          <div className="info-secondary">
            <h4>color description</h4>
            <p>{product.price}</p>
          </div>
          <div className="sizes-grid">
            {sizes.map((x) => (
              <SpecificProductSize
                key={`${x}${x}`}
                id={`${x}${x}`}
                name="size-size"
                value={x}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                label={x}
                currentValue={size}
              ></SpecificProductSize>
            ))}
          </div>
          <div className="add-to-cart-button">
            <GeneralButton>add to cart</GeneralButton>
          </div>
        </div>
        <div className="pictures">
          <div className="aspect-ratio-box">
            <div className="media">
              <img src={imgSrc} alt="img" />
            </div>
          </div>
          <div className="specific-product-carousel">
            <Carousel>
              {product.otherColors.map((x, index) => (
                <Slide
                  key={index}
                  value={x.value}
                  onMouseOut={onMouseOutHandler}
                  onMouseOver={onMouseOverHandler}
                ></Slide>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="sizes-grid">
          {sizes.map((x) => (
            <SpecificProductSize
              key={x}
              id={x}
              name="size"
              value={x}
              onChange={(event) => {
                setSize(event.target.value);
              }}
              label={x}
              currentValue={size}
            ></SpecificProductSize>
          ))}
        </div>
        <div className="add-to-cart-button">
          <GeneralButton>add to cart</GeneralButton>
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;
