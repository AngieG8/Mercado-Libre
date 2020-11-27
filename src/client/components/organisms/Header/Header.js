import React, { useState, useEffect } from 'react';
import  { Box } from '@material-ui/core';
import Search from "../../molecules/Search/Search"
import logo from '../../../images/Logo_ML@2x.png';
import useForm from "../../useForm";

import { useHistory } from "react-router-dom";

import useStyles from './header.styles';

const Header = _ => {
	const classes = useStyles();
	const { values, handleChange, handleSubmit } = useForm(reload);
	let history = useHistory();

	const reload = () => {
		history.push("/items/search?q="+values.param);
		window.location.reload(true);
	}

     return(
	 <Box className={classes.root}>
        <img className={classes.logo} src={logo} alt="Logo Meli"/>
      <Search
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      values={values}
      reload={reload}
      />
    </Box>
	);
}

export default Header;