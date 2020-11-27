import React, { useState, useEffect } from 'react';
import DetailsProduct from '../../organisms/DetailsProduct/DetailsProduct';
import axios from 'axios';

const Details = (props) => {
	const [currentProduct, setData] = useState({});
	const [description, setDescription] = useState({});

	async function fetchDataFromAPI() {
		try {
			const result = await axios(
				`https://api.mercadolibre.com${props.history.location.pathname}`,
			);
			return setData(result.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
	}

	async function fetchDescriptionDataFromAPI() {
		try {
			const resultDescription = await axios(
				`https://api.mercadolibre.com${props.history.location.pathname}/description`,
			);
			return setDescription(resultDescription.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
	}

	useEffect(() => {
		fetchDataFromAPI();
	}, [fetchDataFromAPI]);

	useEffect(() => {
		fetchDescriptionDataFromAPI();
	}, [fetchDescriptionDataFromAPI]);

	return (
		<DetailsProduct
			imagen = {currentProduct.thumbnail}
			condition={currentProduct.condition}
			sold_quantity={currentProduct.sold_quantity}
			price={currentProduct.price}
			title = {currentProduct.title}
			description = {description.plain_text}
		/>
  );
};

export default Details;