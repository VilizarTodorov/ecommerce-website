import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ordersSelector } from "../../../helpers/selectors";
import Select from "../../AddProduct/Select";
import Option from "../../AddProduct/Option";
import "./styles.scss";
import { useHistory } from "react-router-dom";
import { ORDER_HISTORY, PROFILE } from "../../../constants/routes";

const OrderHistory = (props) => {
  const history = useHistory();
  const orders = useSelector(ordersSelector);
  const [orderBy, setOrderBy] = useState("earliest");
  const list = orderBy === "earliest" ? orders : [...orders].reverse();

  return (
    <div className="order-history">
      <Select value={orderBy} onChange={(event) => setOrderBy(event.target.value)} initialValue={orderBy}>
        <Option value="earliest">earliest</Option>
        <Option value="oldest">oldest</Option>
      </Select>

      <table className="table">
        <thead>
          <tr className="order-history-thead">
            <th className="order-history-th">amount</th>
            <th className="order-history-th">id</th>
            <th className="order-history-th">date</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => {
            return (
              <tr
                onClick={() => history.push(`${PROFILE}${ORDER_HISTORY}/${x.orderID}`)}
                className="order-history-tr"
                key={x.orderID}
              >
                <td className="order-history-td price">${x.totalPrice}</td>
                <td className="order-history-td orderID">{x.orderID}</td>
                <td className="order-history-td date">{x.orderCreatedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
