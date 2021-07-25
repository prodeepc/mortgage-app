import { createTheme } from '@material-ui/core';

const mainTheme = createTheme();

mainTheme.typography.h1 = {
  fontSize: '3rem',
  paddingLeft: '2rem',
  marginBottom: '2rem',
  '@media (min-width:600px)': {
    fontSize: '3.5rem',
  },
};

mainTheme.typography.subtitle1 = {
  fontSize: '2rem',
  fontFamily: 'Inter',
  fontWeight: 300,
};

mainTheme.typography.caption = {
  fontSize: '1.2rem',
  lineHeight: '2rem',
  display: 'inline-block',
};

mainTheme.typography.button = {
  fontSize: '1.2rem',
};

export default mainTheme;
