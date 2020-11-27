import React from 'react';
import Main from '../../pages/Main';
import { Paper, Box, Typography, CardMedia } from '@material-ui/core';
import Breadcrumbs from "../../molecules/Breadcrumbs/Breadcrumbs"
import PurchasePanel from "../../molecules/PurchasePanel/PurchasePanel"


import useStyles from './detailsProduct.styles';

const DetailsProduct = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
		<Main />
		<Box className={classes.Breadcrumbs}>
		   <Breadcrumbs/>
		</Box>
		<Paper className={classes.detailProduct}>
		<Box className={classes.product}>
			<img className={classes.img} src={props.imagen} alt="Producto Seleccionado"/>
		<PurchasePanel
			 condition= {props.condition}
			 quantity={props.sold_quantity}
			 title={props.title}
			 price={props.price}
        />
		</Box>
		<Box className={classes.descriptionProduct}>
			<Typography className={classes.title}>Descripción del producto</Typography>
			<Box className={classes.des}>
			<Typography className={classes.text} >{props.description}</Typography>
			</Box>
		</Box>	
		</Paper>
		</div>
	);
}

export default DetailsProduct;