import { Button, makeStyles, Typography } from '@material-ui/core';
import { StyleConstants } from 'styles/StyleConstants';

const useStyle = makeStyles({
  button: {
    fontSize: '1.4rem',
    backgroundColor: `${StyleConstants.PRIMARY_COLOR}`,
  },
  amount: {
    fontSize: '1.4rem',
    color: 'black',
  },
});

export function MortgageAmount() {
  const style = useStyle();
  return (
    <>
      <div>
        <div>
          <span className={style.amount}>Rs. 10,663</span>
          <span>/mo</span>
        </div>
        <div>
          <Button className={style.button} variant="contained" color="primary">
            <Typography variant="button">See Details &gt;</Typography>
          </Button>
        </div>
      </div>
    </>
  );
}
