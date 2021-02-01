import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFailure, getAllProductsWithSpecificType } from "../../Redux/ProductSlice/product-slice";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";

const productListSelector = (state) => state.product.productList;

const ComponentProductType = (props) => {
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
    <Grid>
      {productList.map((x) => (
        <ProductEntry
          key={x.id}
          id={x.id}
          mainImg={x.mainImg}
          price={x.price}
          name={x.name}
          category={category}
          sub={sub}
          productType={x.productType}
          otherColors={true}
        ></ProductEntry>
      ))}
    </Grid>
  );
};

export default ComponentProductType;
