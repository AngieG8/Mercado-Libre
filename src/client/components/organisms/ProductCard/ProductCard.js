import React from 'react';
import shipping from "../../../images/ic_shipping.png";
import {
	Box, Typography, Paper, ButtonBase,
  } from '@material-ui/core';
  
import { useHistory } from "react-router-dom";

import useStyles from './productCard.styles';

const ProductCard = (props) => {
	const classes = useStyles();
	let history = useHistory();
	function handleClick() {
		history.push("/items/"+props.id);
	}

	return (
		<Paper className={classes.card} >
		 <ButtonBase className={classes.button} onClick={handleClick}>
		 <img src={props.imagen} className={classes.imagen} alt="Imagen Producto"/>
		 <Box className={classes.data}>
			<Box className={classes.price}>
			<Typography className={classes.number}>$ {props.price}</Typography>
			<img src={shipping} alt="Envio" className={classes.shipping}/>
			</Box>
			<Typography className={classes.textTitle}>{props.title}</Typography>
		</Box>
	  <Typography className={classes.textAddress}>{props.address}</Typography>
	 </ButtonBase>
    </Paper>
	);
}

export default ProductCard;
