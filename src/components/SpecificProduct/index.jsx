import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isProductInWishList } from "../../helpers/functions";
import { fetchFailure, getSpecificProduct } from "../../Redux/ProductSlice/product-slice";
import { addToWishList, failure, removeFromWishList } from "../../Redux/userSlice/user-slice";
import { addToCart } from "../../Redux/CartSlice/cart-slice";
import Carousel from "../Carousel";
import Slide from "../CarouselSlide";
import GeneralButton from "../GeneralButton";
import SpecificProductSize from "../SpecificProductSize";
import "./styles.scss";

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

const productSelector = (state) => state.product.product;
const wishlistSelector = (state) => state.user.wishList;
const uidSelector = (state) => state.user.uid;
const cartSelector = (state) => state.cart.cart;

const SpecificProduct = () => {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(productSelector);
  const wishList = useSelector(wishlistSelector);
  const uid = useSelector(uidSelector);
  const cart = useSelector(cartSelector);

  const addProductToCart = () => {
    dispatch(addToCart(id, cart, uid, product));
  };

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [size, setSize] = useState(0);

  useEffect(() => {
    dispatch(getSpecificProduct(category, id))
      .then((doc) => {
        setImgSrc(doc.data().mainImg);
        return doc;
      })
      .then((doc) => {
        setIsInWishlist(isProductInWishList(wishList, doc.id));
      })
      .catch((err) => fetchFailure(err.message));
  }, [category, id, dispatch, wishList]);

  const onMouseOverHandler = (value) => {
    if (value) {
      setImgSrc(value);
    }
  };

  const onMouseOutHandler = () => {
    setImgSrc(product.mainImg);
  };

  const toggleInWishList = () => {
    const isAdded = isProductInWishList(wishList, product.id);

    if (!isAdded) {
      const productToAdd = {
        id: product.id,
        mainCategory: product.mainCategory,
        mainImg: product.mainImg,
        name: product.name,
        otherColors: product.otherColors,
        productType: product.productType,
        price: product.price,
        secondaryImg: product.secondaryImg,
        subCategory: product.subCategory,
      };
      dispatch(addToWishList(uid, productToAdd, wishList)).catch((err) => dispatch(failure(err.message)));
    } else {
      dispatch(removeFromWishList(uid, id, wishList)).catch((err) => dispatch(failure(err.message)));
    }
  };

  if (!product) {
    return <div>...Loading</div>;
  }

  return (
    <div className="specific-product-container">
      <div className="specific-product">
        <div className="info">
          <h5>{product.mainCategory}</h5>
          <h5>{product.productType}</h5>
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
            <GeneralButton onClick={addProductToCart}>add to cart</GeneralButton>
            <span className="wish-list-icon" onClick={toggleInWishList}>
              {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
            </span>
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
          <GeneralButton onClick={addProductToCart}>add to cart</GeneralButton>
          <span className="wish-list-icon" onClick={toggleInWishList}>
            {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpecificProduct;
