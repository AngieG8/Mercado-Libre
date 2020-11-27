import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  height: "100%",
  width: "28%",
  flexDirection:"column" 
  },
  button: {
    backgroundColor: "#3483fa",
    color: "#fff",
    '&:hover': {
      backgroundColor: '#274776',
      transnform: "scale(1.01)"
    },
  },
  condition: {
    fontSize: "14px",
    color: "#333333",
    marginBottom: "16px"
  },
  title: {
    fontSize: "24px",
    color: "#333333",
    fontWeight: "bold",
  },
  price: {
    fontSize: "46px",
    color: "#333333",
    margin: "32px 0px"
  },
}));

export default useStyles;