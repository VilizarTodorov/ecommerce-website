import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isProductInWishList } from "../../helpers/functions";
import { addToWishList, failure, removeFromWishList } from "../../Redux/userSlice/user-slice";
import Carousel from "../Carousel";
import Slide from "../CarouselSlide";
import "./styles.scss";

const wishlistSelector = (state) => state.user.wishList;
const uidSelector = (state) => state.user.uid;

const ProductEntry = ({
  id,
  mainCategory,
  mainImg,
  name,
  otherColors,
  price,
  productType,
  secondaryImg,
  subCategory,
  children,
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [imgSrc, setImgSrc] = useState(mainImg);

  const productTypeUrlPart = productType.replace(/\s+/g, "-");

  const wishList = useSelector(wishlistSelector);
  const uid = useSelector(uidSelector);

  const dispatch = useDispatch();

  const onMouseOverHandler = (value) => {
    if (value) {
      setImgSrc(value);
    }
  };

  const onMouseOutHandler = () => {
    setImgSrc(mainImg);
  };

  const toggleInWishList = () => {
    const isAdded = isProductInWishList(wishList, id);

    if (!isAdded) {
      const product = {
        id,
        mainCategory,
        mainImg,
        name,
        otherColors,
        productType,
        price,
        secondaryImg,
        subCategory,
      };
      dispatch(addToWishList(uid, product, wishList)).catch((err) => dispatch(failure(err.message)));
    } else {
      dispatch(removeFromWishList(uid, id, wishList)).catch((err) => dispatch(failure(err.message)));
    }
  };

  useEffect(() => {
    const isAdded = isProductInWishList(wishList, id);
    setIsInWishlist(isAdded);
  }, [wishList, id]);

  return (
    <div className="product-entry">
      <span
        className="wish-list-icon"
        onMouseOut={() => onMouseOutHandler}
        onMouseOver={() => onMouseOverHandler(secondaryImg)}
        onClick={toggleInWishList}
      >
        {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
      </span>
      <div className="product-entry-main-img">
        <Link to={`/${mainCategory}/${subCategory}/${productTypeUrlPart}/${id}`}>
          <img
            onMouseOut={() => onMouseOutHandler()}
            onMouseOver={() => onMouseOverHandler(secondaryImg)}
            src={imgSrc}
            alt="img"
          />
        </Link>
      </div>
      {otherColors && (
        <Carousel>
          {otherColors.map((x, index) => (
            <Slide key={index} value={x.value} onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler}></Slide>
          ))}
        </Carousel>
      )}
      <div className={`product-entry-info ${otherColors.length > 0 ? "has-other-colors" : ""}`}>
        <p className="product-info product-type">{productType}</p>
        <p className="product-info product-name">{name}</p>
        <p className="product-info product-price">${price}</p>
      </div>
      {children && children}
    </div>
  );
};

export default ProductEntry;
