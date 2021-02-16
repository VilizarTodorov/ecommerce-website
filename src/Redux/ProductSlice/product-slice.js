import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../Firebase/firebase";

let lastDoc = null;
export { lastDoc };

const INITIAL_STATE = {
  isFetching: false,
  productList: [],
  product: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: { ...INITIAL_STATE },
  reducers: {
    startFetch(state) {
      state.isFetching = true;
    },

    addProductSuccess(state) {
      state.isFetching = false;
    },

    updateProductSuccess(state) {
      state.isFetching = false;
    },

    deleteProductSuccess(state) {
      state.isFetching = false;
    },

    fetchProductListSuccess(state, action) {
      state.productList = state.productList.concat(action.payload);
      state.isFetching = false;
    },

    fetchProductSuccess(state, action) {
      state.product = action.payload;
      state.isFetching = false;
    },

    fetchFailure(state, action) {
      state.isFetching = false;
      state.error = action.payload;
    },

    clearProductList(state) {
      state.productList = [];
    },
  },
});

const addProduct = (product) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(product.mainCategory)
      .doc()
      .set(product)
      .then(() => dispatch(addProductSuccess()));
  };
};

const updateProduct = (product, productID) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(product.mainCategory)
      .doc(productID)
      .update(product)
      .then(() => dispatch(updateProductSuccess()));
  };
};

const deleteProduct = (collection, productID) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(collection)
      .doc(productID)
      .delete()
      .then(() => dispatch(deleteProductSuccess()));
  };
};

const setAll = (snapshot) => {
  return (dispatch) => {
    dispatch(startFetch());
    const products = [];
    snapshot.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
    dispatch(fetchProductListSuccess(products));
  };
};

const getAllMainCategoryItems = (mainCategory, startAfter, orderByParameters) => {
  return (dispatch) => {
    dispatch(startFetch());
    let ref = firestore.collection(mainCategory).orderBy(orderByParameters.by, orderByParameters.type);

    if (startAfter !== null) {
      ref = ref.startAfter(startAfter);
    }
    return ref
      .limit(2)
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((x) => products.push({ id: x.id, ...x.data() }));
        lastDoc = snapshot.docs[snapshot.docs.length - 1];

        return products;
      })
      .then((products) => {
        dispatch(fetchProductListSuccess(products));
      });
  };
};

const getAllSubCategoryItems = (mainCategory, subCategory, startAfter, orderByParameters) => {
  return (dispatch) => {
    dispatch(startFetch());
    let ref = firestore
      .collection(mainCategory)
      .where("subCategory", "==", subCategory)
      .orderBy(orderByParameters.by, orderByParameters.type);

    if (startAfter !== null) {
      ref = ref.startAfter(startAfter);
    }

    return ref
      .limit(20)
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((x) => products.push({ id: x.id, ...x.data() }));
        lastDoc = snapshot.docs[snapshot.docs.length - 1];

        return products;
      })
      .then((products) => dispatch(fetchProductListSuccess(products)));
  };
};

const getAllProductsWithSpecificType = (mainCategory, subCategory, productType, startAfter, orderByParameters) => {
  return (dispatch) => {
    dispatch(startFetch());

    let ref = firestore
      .collection(mainCategory)
      .where("subCategory", "==", subCategory)
      .where("productType", "==", productType)
      .orderBy(orderByParameters.by, orderByParameters.type);

    if (startAfter !== null) {
      ref = ref.startAfter(startAfter);
    }

    return ref
      .limit(20)
      .get()
      .then((snapshot) => {
        const products = [];
        snapshot.forEach((x) => products.push({ id: x.id, ...x.data() }));
        lastDoc = snapshot.docs[snapshot.docs.length - 1];

        return products;
      })
      .then((products) => dispatch(fetchProductListSuccess(products)));
  };
};

const getSpecificProduct = (category, id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return firestore
      .collection(category)
      .doc(id)
      .get()
      .then((doc) => {
        dispatch(fetchProductSuccess({ id: doc.id, ...doc.data() }));
        return doc;
      });
  };
};

const clear = () => {
  return (dispatch) => {
    dispatch(clearProductList());
    lastDoc = null;
  };
};

export {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllMainCategoryItems,
  getAllSubCategoryItems,
  getAllProductsWithSpecificType,
  setAll,
  getSpecificProduct,
  clear,
};

export const {
  startFetch,
  addProductSuccess,
  updateProductSuccess,
  deleteProductSuccess,
  fetchProductListSuccess,
  fetchProductSuccess,
  fetchFailure,
  clearProductList,
} = productSlice.actions;
export default productSlice.reducer;
