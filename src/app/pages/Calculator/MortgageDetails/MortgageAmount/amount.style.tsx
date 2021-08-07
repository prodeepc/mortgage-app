import { makeStyles } from '@material-ui/core';
import { StyleConstants } from 'styles/StyleConstants';

export const amountStyle = makeStyles({
  button: {
    fontSize: '1.4rem',
    backgroundColor: `${StyleConstants.PRIMARY_COLOR}`,
  },
  amount: {
    fontSize: '3rem',
    color: 'black',
  },
  amountUnit: {
    fontSize: '1.4rem',
    color: '#555',
  },
  amountContainer: {
    textAlign: 'right',
  },
});
