import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "74%",
    height: "44px",
  },
  inputRoot: {
    backgroundColor: 'inherit',
    width: "95%",
  },
  paper: {
    width: "100%",
    height: "44px"

  },
 
  search:{
    height: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  input: {
    textAlign: 'center',
    fontSize: "18px",
    width: "65%",
    padding:"8px"
  },
  iconButton: {
    width: "5%",
    margin :0, 
    paddind: 0,
  }

}));

export default useStyles;
