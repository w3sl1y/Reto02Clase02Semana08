import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [shoppingcart] = value.shoppingcart;

    const toogleMenu = () =>{
        setMenu(!menu)
    }

    return (
        <header>
            <div className="menu">
                <box-icon name="menu"></box-icon>
            </div>

            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/products">PRODUCTS</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total">{shoppingcart.length}</span>
            </div>
        </header>
    )
}
