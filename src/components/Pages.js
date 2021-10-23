import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home"
import { ProductsList } from "./Products/index";
import { ProductDetails } from "./Products/ProductDetails";

export const Pages = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={ProductsList} />
                <Route path="/product/:id" exact component={ProductDetails} />
            </Switch>
        </section>
    )
}
