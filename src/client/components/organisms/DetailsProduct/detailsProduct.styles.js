import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    flexDirection: "column",
    backgroundColor: '#ededed',
  },
  Breadcrumbs:{
    display:"flex",
    alignItems:"center",
    width: "80%",
    height: "50px"
  },
  detailProduct: {
    display: "flex",
    flexDirection: "column",
    background:"#fff",
    width: "80%",
  }, 
  product: {
    display: "flex",
    flexDirection: "row",
    height:"70%",
    padding: "32px",
    justifyContent: "space-between",
  },
  img: {
    width:"680px",
    height: "auto",
    objectFit: "contain",
    imageRendering: "auto",
},
descriptionProduct: {
  display: "flex",
  flexDirection: "column",
  padding: "32px",
},

des: {
  width: "70%",
},
title: {
  fontSize: "28px",
  color: "#333333"
},
text: {
  fontSize: "16px",
  color: "#666666",
  marginTop: "32px",
}
}));

export default useStyles;
