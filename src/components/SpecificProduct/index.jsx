import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { isProductInWishList } from "../../helpers/functions";
import { fetchFailure, getSpecificProduct } from "../../Redux/ProductSlice/product-slice";
import { addToCart } from "../../Redux/CartSlice/cart-slice";
import { toggleProductInWishList } from "../../Redux/WishlistSlice/wishlist-slice";
import Sizes from "./Sizes";
import Info from "./Info";
import Controls from "./Controls";
import "./styles.scss";
import Media from "./Media";
import { cartSelector, specificProductSelector, wishlistSelector } from "../../helpers/selectors";

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11];

const SpecificProduct = () => {
  const { category, id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(specificProductSelector);
  const wishlist = useSelector(wishlistSelector);
  const cart = useSelector(cartSelector);

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [size, setSize] = useState(0);

  const addProductToCart = () => {
    dispatch(addToCart(cart, product, size));
  };

  useEffect(() => {
    const isAdded = isProductInWishList(wishlist, id);
    setIsInWishlist(isAdded);
  }, [wishlist, id]);

  useEffect(() => {
    dispatch(getSpecificProduct(category, id))
      .then((doc) => {
        setImgSrc(doc.data().mainImg);
        return doc;
      })
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

  const toggleInWishList = () => {
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

    dispatch(toggleProductInWishList(productToAdd, wishlist));
  };

  if (!product) {
    return <div>...Loading</div>;
  }

  return (
    <div className="specific-product-container">
      <div className="specific-product">
        <Info
          mainCategory={product.mainCategory}
          productType={product.productType}
          name={product.name}
          price={product.price}
        >
          <Sizes sizes={sizes} onChange={setSize} size={size}></Sizes>

          <Controls
            addProductToCart={addProductToCart}
            toggleInWishList={toggleInWishList}
            isInWishlist={isInWishlist}
          ></Controls>
        </Info>

        <Media
          imgSrc={imgSrc}
          otherColors={product.otherColors}
          onMouseOverHandler={onMouseOverHandler}
          onMouseOutHandler={onMouseOutHandler}
        ></Media>

        <Sizes sizes={sizes} onChange={setSize} size={size}></Sizes>

        <Controls
          addProductToCart={addProductToCart}
          toggleInWishList={toggleInWishList}
          isInWishlist={isInWishlist}
        ></Controls>
      </div>
    </div>
  );
};

export default SpecificProduct;
