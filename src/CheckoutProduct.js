import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import "./CheckouProduct.css";

function CheckoutProduct({ id, price, rating, title, image }) {
  const [dispatch] = useStateValue();
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <Star />
            ))}
        </div>
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_BASKET", payload: id })}
        >
          Remove Item{" "}
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
