import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  width: "100%",
  },
  logo: {
    height: "66%",
    width: "4%",
    margin: "0px 36px"
  }
}));

export default useStyles;
