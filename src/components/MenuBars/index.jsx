import React from "react";
import { useDispatch } from "react-redux";
import { setMainToTrue } from "../../Redux/NavSlice/nav-slice";
import "./styles.scss";

const MenuBars = () => {
  const dispatch = useDispatch();

  const toggleNav = () => {
    dispatch(setMainToTrue());
  };

  return (
    <div className='icon'>
      <i onClick={toggleNav} className="fas fa-bars fa-lg menu-bars"></i>
    </div>
  );
};

export default MenuBars;
