import React from "react";
import shopMens from "../../assets/shopMens.jpg";
import shopWomen from "../../assets/shopWomens.jpg";
import { MEN, WOMEN } from "../../constants/routes";
import { WithAuthorization } from "../../HOC";
import LinkComponent from "../LinkComponent";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <aside style={{ backgroundImage: `url(${shopMens})` }} className="shop-main-category men">
        <LinkComponent to={MEN} linkContent="shop men"></LinkComponent>
      </aside>
      <aside style={{ backgroundImage: `url(${shopWomen})` }} className="shop-main-category women">
        <LinkComponent to={WOMEN} linkContent="shop women"></LinkComponent>
      </aside>
    </div>
  );
};

const condition = (user) => user != null;

export default WithAuthorization(condition)(Home);
