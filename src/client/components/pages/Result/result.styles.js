import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
   display: "flex",
   justifyContent: "center",
   alignItems:"center",
   flexDirection: "column",
   backgroundColor: '#ededed',
  },
  result:{
    display: "flex",
    flexDirection: "column",
    background:"#eee",
    width: "80%",
    height: "90%"
  },
  divider:{
      color: "#f5f5f5",
      width: '85%',
      marginleft:"20px",
  },
  Breadcrumbs:{
     display:"flex",
     alignItems:"center",
     width: "80%",
     height: "38px"
  }
}));

export default useStyles;
