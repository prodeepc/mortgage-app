import { Button, Typography } from '@material-ui/core';
import { FC, useEffect, useState } from 'react';
import { sliderState } from '../../slice/types';
import { amountStyle } from './amount.style';

const useStyle = amountStyle;

export const MortgageAmount: FC<{ slices: sliderState }> = props => {
  const style = useStyle();
  let price = props.slices.price;
  let rate = props.slices.rate;
  let length = props.slices.length;

  const [amount, setAmount] = useState(10663);
  const [formattedAmt, setFormattedAmt] = useState(0);

  function calculateEmi() {
    const amount = price || 500000;
    const term = (length || 5) * 12;
    const interest = rate || 0;
    const monthlyIR = interest / 100 / 12;
    const top = Math.pow(1 + monthlyIR, term);
    const bottom = top - 1;
    const sp = top / bottom;
    let emi = Math.round(amount * monthlyIR * sp);
    emi = isNaN(emi) ? 0 : emi;
    setAmount(emi);
  }

  useEffect(() => {
    calculateEmi();
  }, [price, length, rate]);

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
};
