import React from "react";
import '../scss/future-products.scss';
import {FutureProduct} from "./futureProduct";

export function App(): JSX.Element {
    return (
        <div className="wrapper">
            <FutureProduct />
        </div>
    )
}
