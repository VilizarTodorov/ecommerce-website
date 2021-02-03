import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isProductInWishList } from "../../helpers/functions";
import { addToWishList, failure, removeFromWishList } from "../../Redux/userSlice/user-slice";
import Carousel from "../Carousel";
import Slide from "../CarouselSlide";
import "./styles.scss";

const wishlistSelector = (state) => state.user.wishList;
const uidSelector = (state) => state.user.uid;

const ProductEntry = (props) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [imgSrc, setImgSrc] = useState(props.mainImg);

  const wishList = useSelector(wishlistSelector);
  const uid = useSelector(uidSelector);

  const dispatch = useDispatch();

  const onMouseOverHandler = (value) => {
    if (value) {
      setImgSrc(value);
      return;
    }
    return;
  };

  const onMouseOutHandler = () => {
    setImgSrc(props.mainImg);
  };

  const toggleInWishList = () => {
    const isAdded = isProductInWishList(wishList, props.id);

    if (!isAdded) {
      const product = {
        id: props.id,
        mainImg: props.mainImg,
        secondaryImg: props.secondaryImg,
        price: props.price,
        name: props.name,
        category: props.category,
        sub: props.sub,
        productType: props.productType,
        otherColors: props.otherColors,
      };
      dispatch(addToWishList(uid, product, wishList)).catch((err) => dispatch(failure(err.message)));
    } else {
      dispatch(removeFromWishList(uid, props.id, wishList)).catch((err) => dispatch(failure(err.message)));
    }
  };

  useEffect(() => {
    const isAdded = isProductInWishList(wishList, props.id);
    setIsInWishlist(isAdded);
  }, [wishList, props.id]);

  return (
    <div className="product-entry">
      <span
        className="wish-list-icon"
        onMouseOut={() => onMouseOutHandler}
        onMouseOver={() => onMouseOverHandler(props.secondaryImg)}
        onClick={toggleInWishList}
      >
        {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
      </span>
      <div className="product-entry-main-img">
        <img
          onMouseOut={() => onMouseOutHandler()}
          onMouseOver={() => onMouseOverHandler(props.secondaryImg)}
          src={imgSrc}
          alt="img"
        />
      </div>
      {props.otherColors && (
        <Carousel>
          {props.otherColors.map((x, index) => (
            <Slide key={index} value={x.value} onMouseOut={onMouseOutHandler} onMouseOver={onMouseOverHandler}></Slide>
          ))}
        </Carousel>
      )}
      <div className={`product-entry-info ${props.otherColors.length > 0 ? "has-other-colors" : ""}`}>
        <p className="product-info product-type">{props.productType}</p>
        <p className="product-info product-name">{props.name}</p>
        <p className="product-info product-price">${props.price}</p>
      </div>
    </div>
  );
};

export default ProductEntry;
