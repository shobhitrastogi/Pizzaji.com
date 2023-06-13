import React from "react";
import Header from "../components/Header";
import MenuItems from "../components/MenuItems";
import { MenuList } from "../helpers/MenuList";
const Menu = () => {
  return (
    <>
      <Header />
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList row">
          {MenuList.map((menuItems, key) => {
            return (
             <div key={key} className="col-md-4">

              <MenuItems

                image={menuItems.image}
                name={menuItems.name}
                 price={menuItems.price}
/>
</div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
