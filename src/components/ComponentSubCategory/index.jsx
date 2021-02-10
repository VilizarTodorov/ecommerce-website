import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "../Grid";
import ProductEntry from "../ProductEntry";
import {
  fetchFailure,
  getAllMainCategoryItems,
  getAllSubCategoryItems,
  lastDoc,
} from "../../Redux/ProductSlice/product-slice";
import GeneralHeading from "../GeneralHeading";
import Filter from "../Filter";
import LoadMore from "../LoadMore";
import { productListSelector } from "../../helpers/selectors";
import GeneralContainer from "../GeneralContainer";

const ComponentSubCategory = () => {
  const { category, sub } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector(productListSelector);
  console.log(lastDoc);
  useEffect(() => {
    if (sub === "all") {
      dispatch(getAllMainCategoryItems(category, lastDoc)).catch((err) => dispatch(fetchFailure(err.message)));
    } else {
      dispatch(getAllSubCategoryItems(category, sub)).catch((err) => dispatch(fetchFailure(err.message)));
    }
  }, [category, sub, dispatch]);

  return (
    <GeneralContainer>
      <GeneralHeading>MENS CLOTHING, SHOES AND ACCESSORIES</GeneralHeading>
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
          dispatch(getAllMainCategoryItems(category, lastDoc)).catch((err) => dispatch(fetchFailure(err.message)));
        }}
      ></LoadMore>
    </GeneralContainer>
  );
};

export default ComponentSubCategory;
