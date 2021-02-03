import React from "react";
import { useSelector } from "react-redux";
import Grid from "../../Grid";
import ProductEntry from "../../ProductEntry";

const wishlistSelector = (state) => state.user.wishList;

const WishList = () => {
  const wishlist = useSelector(wishlistSelector);

  return (
    <Grid>
      {wishlist.map((x) => (
        <ProductEntry
          key={x.id}
          id={x.id}
          mainImg={x.mainImg}
          secondaryImg={x.secondaryImg}
          price={x.price}
          name={x.name}
          category={x.category}
          sub={x.sub}
          productType={x.productType}
          otherColors={x.otherColors}
        ></ProductEntry>
      ))}
    </Grid>
  );
};

export default WishList;
