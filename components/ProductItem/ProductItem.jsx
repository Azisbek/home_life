import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import dynamic from 'next/dynamic'

import Image from 'next/image'

import AppButton from '../ui/Button/AppButton'
import ProductImg from '../../assets/product_img.png'

import classes from './ProductIte.module.css'

const ProductItem = () => {
	const [ratingValue, setRatingValue] = useState(3.5)

	return (
		<div className={classes.blockCart}>
			<div className={classes.blockImg}>
				<Image src={ProductImg} width={245} height={255} />
			</div>
			<div>. . .</div>
			<div className={classes.contentProductCart}>
				<div>
					<Rating
						size={24}
						initialValue={ratingValue}
						allowFraction={true}
						readonly={true}
					/>
					<div>
						<p className={classes.title}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</p>
					</div>
				</div>

				<div className={classes.blockPrice}>
					<p className={classes.price}>2000 som</p>
					<AppButton>Купить</AppButton>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
