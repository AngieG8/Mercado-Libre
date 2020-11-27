import React from 'react';
import {
  Box, Typography, Button
} from '@material-ui/core/';

import useStyles from './purchasePanel.styles';


const PurchasePanel = (props) => {
  const classes = useStyles();
 const { condition, quantity, title,  price} = props
  return (
  <Box className={classes.root}>
    <Typography className={classes.text}>{condition} - {quantity} vendidos </Typography>
    <Typography className={classes.title} > {title} </Typography>
    <Typography className={classes.price}> $ {price} </Typography>
    <Button
          children="Comprar"
          className={classes.button}
        />
  </Box>
  );
};

export default PurchasePanel;