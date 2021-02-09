import React from "react";
import { useSelector } from "react-redux";
import { wishlistSelector } from "../../../helpers/selectors";
import Grid from "../../Grid";
import ProductEntry from "../../ProductEntry";

const WishList = () => {
  const wishlist = useSelector(wishlistSelector);

  return (
    <Grid>
      {wishlist.map((x) => (
        <ProductEntry
          key={x.id}
          id={x.id}
          mainCategory={x.mainCategory}
          mainImg={x.mainImg}
          name={x.name}
          otherColors={x.otherColors}
          productType={x.productType}
          price={x.price}
          secondaryImg={x.secondaryImg}
          subCategory={x.subCategory}
        ></ProductEntry>
      ))}
    </Grid>
  );
};

export default WishList;
