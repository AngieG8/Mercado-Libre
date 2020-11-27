import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card:{
   height: "20%",
   width: "100%",
   borderBottom: "2px solid #eeeeee",
   '&:hover': {
   boxShadow: "1px 1px 4px 2px #eeeeee",
   transform: "scale(1.01)"
  },
  },
  button: {
    display: "grid",
    gridTemplateColumns: "17% 60% 17%",
    alignItems: "self-start",
    justifyContent: "space-between",
    padding: "16px",
    height: "100%",
    width: "100%",
  },
  imagen: {
    height: "180px",
    width: "180px",
    objectFit: "contain",
    borderRadius:"4px"
  },
  shipping:{
    height: "26px",
    width: "19px",
    objectFit: "contain",
    margin: "6px 8px"
  },
  data: {
    display: "flex",
    padding: "16px",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "70%",
    height: "100%",
  },
  price: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    height: "33px",
    marginBottom:"16px",
  },
  number: {
    fontSize: "24px",
    color: "#333333"
  },
  textTitle: {
    fontSize: "18px",
    color: "#333333",
    textAlign: "justify"
  },
  textAddress: {
    fontSize: "12px",
    color: "#666666",
    marginTop: "42px"
  }

}));

export default useStyles;
