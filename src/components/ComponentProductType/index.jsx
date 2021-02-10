import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productListSelector } from "../../helpers/selectors";
import { fetchFailure, getAllProductsWithSpecificType } from "../../Redux/ProductSlice/product-slice";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";
import GeneralContainer from '../GeneralContainer'

const ComponentProductType = () => {
  const { category, sub, type } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);

  useEffect(() => {
    const productType = type.replace(/-/g, " ");
    dispatch(getAllProductsWithSpecificType(category, sub, productType)).catch((err) =>
      dispatch(fetchFailure(err.message))
    );
  }, [category, sub, type, dispatch]);

  return (
    <GeneralContainer>
      <Grid>
        {productList.map((x) => (
          <ProductEntry
            key={x.id}
            id={x.id}
            mainCategory={x.mainCategory}
            mainImg={x.mainImg}
            name={x.name}
            otherColors={x.otherColors}
            price={x.price}
            productType={x.productType}
            secondaryImg={x.secondaryImg}
            subCategory={x.subCategory}
          ></ProductEntry>
        ))}
      </Grid>
    </GeneralContainer>
  );
};

export default ComponentProductType;
