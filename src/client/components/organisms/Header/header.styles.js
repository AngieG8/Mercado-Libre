import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  backgroundColor: "#FFE600",
  justifyContent: "center",
  alignItems: "center",
  height: "60px",
  width: "100%",
  },
  logo: {
    height: "66%",
    width: "65px",
    marginRight: "36px"
  }
}));

export default useStyles;
