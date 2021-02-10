import React from "react";
import { useSelector } from "react-redux";
import { wishlistSelector } from "../../helpers/selectors";
import GeneralHeading from "../GeneralHeading";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";
import GeneralContainer from "../GeneralContainer";

const Wishlist = (props) => {
  const wishlist = useSelector(wishlistSelector);

  return (
    <GeneralContainer>
      <GeneralHeading>your wishlist</GeneralHeading>
      <Grid>
        {wishlist.map((product) => (
          <ProductEntry
            key={product.id}
            id={product.id}
            mainCategory={product.mainCategory}
            mainImg={product.mainImg}
            name={product.name}
            otherColors={product.otherColors}
            price={product.price}
            productType={product.productType}
            secondaryImg={product.secondaryImg}
            subCategory={product.subCategory}
          ></ProductEntry>
        ))}
      </Grid>
    </GeneralContainer>
  );
};

export default Wishlist;
