import React from 'react'
import HomeProductNewList from './HomeProductNewList'
import classes from './HomeNewProduct.module.css'

const HomeNewProduct = ({ mainData }) => {
	const array = [1, 2, 3, 4]
	return (
		<section className={classes.containerHomeProduct}>
			<h3>Новинки</h3>
			<HomeProductNewList mainData={array} />
		</section>
	)
}

export default HomeNewProduct
