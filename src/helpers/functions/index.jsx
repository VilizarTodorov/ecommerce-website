const isEmailInvalidFn = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(email).toLowerCase());

  if (!result) {
    return "pleas enter a valid email";
  }

  return false;
};

const isNameInvalidFn = (name, filedName) => {
  if (!name) {
    return `${filedName} is required`;
  }
  return false;
};

const isPasswordInvalidFn = (password) => {
  if (password.length < 6) {
    return "password must be at least 6 characters";
  }
  return false;
};

const isRepeatPasswordInvalidFn = (password, repeatPassword) => {
  if (password !== repeatPassword) {
    return "password and repeat password must match";
  }
  return false;
};

const isPasswordInvalidSignInFn = (password) => {
  if (!password.trim()) {
    return "please enter a password";
  }

  return false;
};

const isProductInWishList = (wishlist, id) => {
  return wishlist.some((x) => x.id === id);
};

const isProductInCart = (cart, id) => {
  return cart.findIndex((x) => x.id === id);
};

export {
  isEmailInvalidFn,
  isPasswordInvalidFn,
  isRepeatPasswordInvalidFn,
  isProductInWishList,
  isProductInCart,
  isNameInvalidFn,
  isPasswordInvalidSignInFn,
};
