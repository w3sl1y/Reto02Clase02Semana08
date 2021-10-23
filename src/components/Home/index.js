import React from 'react';
import Portada from "../../images/home.jpeg"
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home">
            <Link to="/">
                <h1>HOME</h1>
            </Link>
            <Link to="/products">
                <h1>NEW PRODUCTS</h1>
            </Link>
            <img src={Portada} alt="home"></img>
        </div>
    )
}