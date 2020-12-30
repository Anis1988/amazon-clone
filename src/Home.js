import React from "react";
import amazon_banner from "./amazon_banner.jpg";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div div className="home">
      <img className="home__image" src={amazon_banner} alt="" />
      <div className="home__row">
        <Product
          id="2343246"
          title="Alpha Prime Women's Grace Tank"
          price={30}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71rj6Kft3%2BL._AC_UY879_.jpg"
        />
        <Product
          id="74562"
          title="Crayola Pip Squeaks Washable Markers Set, Stocking Stuffer for Boys & Girls, Ages 4, 5, 6, 7"
          price={11.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/91Xj8aZbbTL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="75743"
          title="A Promised Land Hardcover – November 17, 2020"
          price={23.96}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
        />

        <Product
          id="23424"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)
"
          price={1024.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="34534213"
          title="lApple Pencil"
          price={94.96}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/21l795GXZkL._AC_SY879_.jpg"
        />

        <Product
          id="2341"
          title='10.2" Selfie Ring Light with Tripod Stand & Cell Phone Holder for Live Stream/Makeup, UBeesize Mini Led Camera Ringlight for YouTube Video/Photography Compatible with All Phones (Black)'
          price={30.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/616Z3Wln04L._AC_SX679_.jpg"
        />

        <Product
          id="123987641"
          title="Automatic Soap Hand Sanitizer Dispenser Touchless Hands Free Wall Mounted for Kitchen Bathroom White"
          price={30.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/51VdlMOjXEL._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="7439"
          title='Samsung QN98Q900RBFXZA 98" 8k QLED Smart UHD TV (2019)'
          price={59999.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/51maP9cZxJL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
