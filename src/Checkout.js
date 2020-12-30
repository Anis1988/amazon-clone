import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG"
          alt=""
          className="chekout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            {" "}
            <h2>
              Check your Saved for later items below or{" "}
              <Link to="/">continue shopping</Link>
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket </h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
