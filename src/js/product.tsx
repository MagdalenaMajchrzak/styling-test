import React from "react";
import '../scss/product.scss';

export type productType = {
    img: string;
    title: string;
    underTitle: string;
    url: string;
    description: string;
};

export function Product({title, underTitle, url, img, description}: productType): JSX.Element {
    const imgUrl = new URL(`${img}`, import.meta.url);
    return (
        <div className="product">
            <figure style={{backgroundImage: `url("${imgUrl}")`}} className="product__img"/>
            <div className="product__body">
                <h3 className="product__title">
                    {title}
                </h3>
                <p className="product__under-title">
                    {underTitle}
                </p>
                <p className="product__description">
                    {description}
                </p>
                <a href={url} className="product__link">Les mer om Magi...</a>
            </div>
        </div>
    )
}
