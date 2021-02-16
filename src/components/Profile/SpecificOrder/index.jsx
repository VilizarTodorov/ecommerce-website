import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ordersSelector, specificOrderSelector } from "../../../helpers/selectors";
import { getSpecificOrder } from "../../../Redux/OrdersSlice/order-slice";
import "./styles.scss";

const SpecificOrder = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(specificOrderSelector);
  const orders = useSelector(ordersSelector);

  useEffect(() => {
    dispatch(getSpecificOrder(id, orders));
  });

  if (!order) {
    return <div>...Loading</div>;
  }

  return (
    <div className="specific-order">
      <h2>Order ID: {id}</h2>
      <table className="order-table">
        <thead>
          <tr className="order-table-tr">
            <td className="order-table-td"></td>
            <td className="order-table-td">name</td>
            <td className="order-table-td">price</td>
            <td className="order-table-td">quantity</td>
          </tr>
        </thead>
        <tbody>
          {order.items.map((x) => {
            return (
              <tr className="order-table-tr" key={x.id}>
                <td className="order-table-td">
                  <img src={x.mainImg} alt="product img" />
                </td>
                <td className="order-table-td">{x.name}</td>
                <td className="order-table-td">${x.price}</td>
                <td className="order-table-td">{x.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Total Price: ${order.totalPrice}</div>
    </div>
  );
};

export default SpecificOrder;
