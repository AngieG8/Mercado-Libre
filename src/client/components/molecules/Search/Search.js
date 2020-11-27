import React from 'react';
import {
  Paper, Box,InputBase,IconButton
} from '@material-ui/core/';
import { MdSearch } from 'react-icons/md';
import useStyles from './search.styles';


const Search = (props) => {
  const classes = useStyles();
  const {
    values, handleSubmit, handleChange, reload
  } = props;

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
    <form role="search" className={classes.search} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        name="param"
        placeholder="Nunca dejes de buscar"
        inputProps={{ 'aria-label': 'Search...' }}
        value={values.param} required
        onChange={handleChange}
      />
      <IconButton 
      type="submit" 
      onClick={reload}
      className={classes.iconButton} 
      aria-label="search">
        <MdSearch fontSize="30px"/>
      </IconButton>
      </form>
      </Paper>
  </Box>
  );
};

export default Search;
