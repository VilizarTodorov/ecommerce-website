const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isProductInWishList = (wishlist, id) => {
  return wishlist.some((x) => x.id === id);
};

const isProductInCart = (cart, id) => {
  return cart.findIndex((x) => x.id === id);
};

export { validateEmail, isProductInWishList, isProductInCart };
