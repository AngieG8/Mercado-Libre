import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { MdKeyboardArrowRight } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
    root: {
      alignItems: "center",
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  export default function CustomSeparator() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Breadcrumbs separator={<MdKeyboardArrowRight fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick}>
            Home
          </Link>
          <Link color="inherit" href="/items/search" onClick={handleClick}>
            Articulos
          </Link>
          <Typography color="textPrimary">Detalle</Typography>
        </Breadcrumbs>
      </div>
    );
  }