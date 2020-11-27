import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
  display: "flex",
  height: "100%",
  width: "22%",
  flexDirection:"column" 
  },
  button: {
    backgroundColor: "#3483fa",
    color: "#fff",
    '&:hover': {
      color: 'rgba(255, 255, 255, 1) !important',
      backgroundColor: '#274776)',
      transform: "scale(1.01)"
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