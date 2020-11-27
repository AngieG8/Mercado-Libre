import React, { useState, useEffect } from 'react';
import ProductCard from '../../organisms/ProductCard/ProductCard';
import Breadcrumbs from "../../molecules/Breadcrumbs/Breadcrumbs"
import Main from '../Main';
import axios from 'axios';
import Loading from "../../molecules/Loading/Loading"
import {
	Box, Divider, Paper, ButtonBase,
  } from '@material-ui/core';

  import useStyles from './result.styles';

const Result = (props) => {
  const classes = useStyles();
  const [products, setData] = useState({ results: [] });

  async function requestProductSearch() {
	  
		try {
			const result = await axios(
				`https://api.mercadolibre.com/sites/MLA/search${props.history.location.search}`,
			);
			return setData(result.data);
		}
		catch (error){
			console.error('Failed the api: ', error);
		}
  }

    useEffect(() => {
		requestProductSearch();
	}, [requestProductSearch]);
	
	
	return (
	<div className={classes.root}>
		<Main />
		<Box className={classes.Breadcrumbs}>
		<Breadcrumbs/>
		</Box>
		<Paper className={classes.result}>
		{products.results.length ?
		products.results.map((item, index) => {
		if(index < 4)
		return (
		<Box key={item.id}>
		<ProductCard 
		id = {item.id}
		imagen={item.thumbnail}
		price={item.price}
		title = {item.title}
		address = {item.address.state_name}
		/>
		</Box>
	     )})
		: <Loading/>}
		</Paper>
	</div>

  );
}

export default Result;
