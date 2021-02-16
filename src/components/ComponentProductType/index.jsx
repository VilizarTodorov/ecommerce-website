import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { orderByParametersSelector, productListSelector } from "../../helpers/selectors";
import { clear, fetchFailure, getAllProductsWithSpecificType, lastDoc } from "../../Redux/ProductSlice/product-slice";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";
import GeneralContainer from "../GeneralContainer";
import Filter from "../Filter";
import LoadMore from "../LoadMore";

const ComponentProductType = () => {
  const { category, sub, type } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  const parameters = useSelector(orderByParametersSelector);
  const productType = useMemo(() => {
    return type.replace(/-/g, " ");
  }, [type]);

  useEffect(() => {
    dispatch(clear());
    dispatch(getAllProductsWithSpecificType(category, sub, productType, lastDoc, parameters));
    // .catch((err) =>
    //   dispatch(fetchFailure(err.message))
    // );
  }, [category, sub, type, dispatch, parameters, productType]);

  return (
    <GeneralContainer>
      <Filter></Filter>
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
      <LoadMore
        loadMore={() => {
          dispatch(getAllProductsWithSpecificType(category, sub, productType, lastDoc, parameters)).catch((err) =>
            dispatch(fetchFailure(err.message))
          );
        }}
      ></LoadMore>
    </GeneralContainer>
  );
};

export default ComponentProductType;
