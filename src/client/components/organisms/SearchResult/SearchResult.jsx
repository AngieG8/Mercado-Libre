import React from 'react';
import ProductCard from "../ProductCard/ProductCard"
import { useSelector } from 'react-redux';
import  { Box } from '@material-ui/core';


import useStyles from './searchResult.styles';

const SearchResult = () => {
  const classes = useStyles();
  const style = {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: "50px"
	};
  
 
  return (
    <Box className={classes.root}>
      {products.length ? products.map((product, index) => {
         if(index < 4)
         return (
          <ProductCard
          element={product}
          />
        )
      }) :  <h3 style={style}>Loading...</h3>}
       
    </Box>
  );
};

export default SearchResult;
