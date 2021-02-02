import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";
import { fetchFailure, getAllMainCategoryItems, getAllSubCategoryItems } from "../../Redux/ProductSlice/product-slice";

const productListSelector = (state) => state.product.productList;

const ComponentSubCategory = () => {
  const { category, sub } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);

  useEffect(() => {
    if (sub === "all") {
      dispatch(getAllMainCategoryItems(category)).catch((err) => dispatch(fetchFailure(err.message)));
    } else {
      dispatch(getAllSubCategoryItems(category, sub)).catch((err) => dispatch(fetchFailure(err.message)));
    }
  }, [category, sub, dispatch]);

  return (
    <Grid>
      {productList.map((x) => (
        <ProductEntry
          key={x.id}
          id={x.id}
          mainImg={x.mainImg}
          secondaryImg={x.secondaryImg}
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

export default ComponentSubCategory;
