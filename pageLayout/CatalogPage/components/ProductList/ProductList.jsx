import React from 'react'
import { data } from "../../content/content"
import ProductItem from "@components/ProductItem/ProductItem"
import s from "./ProductList.module.css"

export const ProductList = () => {
    return (
        <div className={s.container}>{
            data.map((el) => {
                return <ProductItem data={el} />
            })
        }</div>
    )
}
