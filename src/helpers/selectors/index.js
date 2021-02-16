import { createSelector } from "@reduxjs/toolkit";

const selectApp = (state) => state.app;
const selectProduct = (state) => state.product;
const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;
const selectWishList = (state) => state.wishlist;
const selectToggleNav = (state) => state.toggleNav;
const selectOrderBy = (state) => state.orderBy;
const selectOrders = (state) => state.orders;

export const isAppReadySelector = createSelector([selectApp], ({ isAppReady }) => isAppReady);
export const isProductFetchingSelector = createSelector([selectProduct], ({ isFetching }) => isFetching);
export const userSelector = createSelector([selectUser], ({ user }) => user);
export const uidSelector = createSelector([selectUser], ({ uid }) => uid);
export const namesSelector = createSelector([selectUser], ({ user }) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
  };
});
export const productListSelector = createSelector([selectProduct], ({ productList }) => productList);
export const cartSelector = createSelector([selectCart], ({ cart }) => cart);
export const totalItemsAndPriceSelector = createSelector([selectCart], ({ cart }) => {
  let totalItems = 0;
  let totalPrice = 0;

  cart.forEach((x) => {
    totalItems += x.quantity;
    totalPrice += x.quantity * x.price;
  });

  return {
    totalItems,
    totalPrice,
  };
});
export const cartTotalItemsCountSelector = createSelector([selectCart], ({ cart }) => {
  let count = 0;
  cart.forEach((x) => {
    count += +x.quantity;
  });
  return count;
});
export const wishlistItemsCountSelector = createSelector([selectWishList], ({ wishlist }) => wishlist.length);
export const mainNavSelector = createSelector([selectToggleNav], ({ mainNav }) => mainNav);
export const wishlistSelector = createSelector([selectWishList], ({ wishlist }) => wishlist);
export const isUserFetching = createSelector([selectUser], ({ authActionStarted }) => authActionStarted);
export const specificProductSelector = createSelector([selectProduct], ({ product }) => product);
export const orderByParametersSelector = createSelector([selectOrderBy], (parameters) => parameters);
export const userErrorSelector = createSelector([selectUser], ({ error }) => error);
export const ordersSelector = createSelector([selectOrders], ({ orders }) => orders);
export const specificOrderSelector = createSelector([selectOrders], ({ specificOrder }) => specificOrder);
export const hasMoreSelector = createSelector([selectProduct], ({ hasMore }) => hasMore);
