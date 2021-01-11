import React from "react";
import './styles.scss'

const UlComponent = (props) => {
  const items = props.items.map((item) => <li key={item} className='shop-item-category'>{item}</li>);

  return (
    <ul>
      <h3 className='category-title'>{props.listTitle}</h3>
      {items}
    </ul>
  );
};

export default UlComponent;
