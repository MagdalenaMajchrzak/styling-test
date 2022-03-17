import React from "react";
import '../scss/future-products.scss';
import {futureProductData} from "./productData";
import {Product} from "./product";

export function FutureProduct(): JSX.Element {
    return (
        <div className="future-products">
            <h1 className="future-products__title">Featured products</h1>
            <div className="future-products__container">
                {futureProductData.map(({ title, url, img, description,underTitle }) => (
                    <div className="future-products__item">
                        <Product
                            title={title}
                            url={url}
                            img={img}
                            underTitle={underTitle}
                            description={description}
                            key={title}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
