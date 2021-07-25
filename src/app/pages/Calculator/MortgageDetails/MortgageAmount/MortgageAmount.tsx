import { Button, makeStyles, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { StyleConstants } from 'styles/StyleConstants';

const useStyle = makeStyles({
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

export function MortgageAmount() {
  const style = useStyle();

  const [amount] = useState(10663);
  const [formattedAmt, setFormattedAmt] = useState(0);

  useEffect(() => {
    setFormattedAmt(formatAmount(amount));
  }, [amount]);

  function formatAmount(amt) {
    return amt.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  return (
    <>
      <div className={style.amountContainer}>
        <span className={style.amount}>Rs. {formattedAmt}</span>
        <span className={style.amountUnit}>/mo</span>
      </div>
      <div className={style.amountContainer}>
        <Button className={style.button} variant="contained" color="primary">
          <Typography variant="button">See Details &gt;</Typography>
        </Button>
      </div>
    </>
  );
}
