import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = createMuiTheme();

const errorColor = 'rgba(255, 20, 20, 1)';
const warningColor = 'rgba(236, 210, 40, 1)';
const successColor = 'rgba(35, 152, 0, 1)';
const textColor = 'rgba(110,110,110,1)';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(1,8,13,1)',
    },
    secondary: {
      main: 'rgba(11, 190, 227, 1)',
    },
    error: {
      main: errorColor,
    },
    warning: {
      main: warningColor,
    },
    success: {
      main: successColor,
    },
    background: {
      default: '#ededed',
    },
    text: {
      primary: textColor,
      disabled: 'rgba(183,183,183,1)',
    },
    stepsOfSteps: {
      main: '#7CB9CB',
    },
  },
  stepSpaces: (size) => {
    switch (size) {
      case 'sm': return '20vw';
      case 'md': return '25vw';
      case 'lg': return '30vw';
      case 'xl': return '35vw';
      default: return 0;
    }
  },
  
  overrides: {
    MuiBreadcrumbs: {
      root: {
        overflowX: 'auto',
      },
      ol: {
        flexWrap: 'nowrap',
      },
      li: {
        whiteSpace: 'nowrap',
        padding: `0 ${defaultTheme.spacing()}px`,
      },
    },
  },
});

export default theme;
