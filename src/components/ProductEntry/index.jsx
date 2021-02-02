import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isProductInWishList } from "../../helpers/functions";
import { addToWishList, failure, removeFromWishList } from "../../Redux/userSlice/user-slice";
import "./styles.scss";

const wishlistSelector = (state) => state.user.wishList;
const uidSelector = (state) => state.user.uid;

const ProductEntry = (props) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [imgSrc, setImgSrc] = useState(props.mainImg);

  const wishList = useSelector(wishlistSelector);
  const uid = useSelector(uidSelector);

  const dispatch = useDispatch();

  const toggleInWishList = () => {
    const isAdded = isProductInWishList(wishList, props.id);

    if (!isAdded) {
      const product = {
        id: props.id,
        mainImg: props.mainImg,
        price: props.price,
        name: props.name,
        category: props.category,
        sub: props.sub,
        productType: props.productType,
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
      <span onClick={toggleInWishList} className="wish-list-icon">
        {isInWishlist ? <i className="fas fa-heart fa-lg"></i> : <i className="far fa-heart fa-lg"></i>}
      </span>
      <div className="product-entry-main-img">
        <img
          onMouseOut={() => setImgSrc(props.mainImg)}
          onMouseOver={() => setImgSrc(props.secondaryImg)}
          src={imgSrc}
          alt="img"
        />
      </div>
      {props.otherColors && <div className="product-entry-other-colors">other colors</div>}
      <div className="product-entry-info">
        <p className="product-info product-type">{props.productType}</p>
        <p className="product-info product-name">{props.name}</p>
        <p className="product-info product-price">${props.price}</p>
      </div>
    </div>
  );
};

export default ProductEntry;
