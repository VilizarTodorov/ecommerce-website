import React from "react";
import Search from "./Search";
import Profile from "./Profile";
import Cart from "./Cart";
import "./styles.scss";
import WishList from "./Wishlist";

const HeaderOptions = () => {
  return (
    <div className="options-container">
      <Search></Search>
      <Profile></Profile>
      <WishList></WishList>
      <Cart></Cart>
    </div>
  );
};

export default HeaderOptions;
