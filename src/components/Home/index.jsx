import React from "react";
import { Link } from "react-router-dom";
import shopMens from "../../assets/shopMens.jpg";
import shopWomen from "../../assets/shopWomens.jpg";
import { MEN, WOMEN } from "../../constants/routes";
import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <aside style={{ backgroundImage: `url(${shopMens})` }} className="shop-main-category men">
        <Link to={MEN}>
          <div className="shop shop-men">
            shop men
            <i class="fas fa-arrow-right"></i>
          </div>
        </Link>
      </aside>
      <aside style={{ backgroundImage: `url(${shopWomen})` }} className="shop-main-category women">
        <Link to={WOMEN}>
          <div className="shop shop-women">
            shop women
            <i class="fas fa-arrow-right"></i>
          </div>
        </Link>
      </aside>
    </div>
  );
};

export default Home;
