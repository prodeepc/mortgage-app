import { makeStyles, Typography } from '@material-ui/core';
import { StyleConstants } from 'styles/StyleConstants';

const useStyle = makeStyles({
  percentage: {
    fontSize: '3rem',
    color: '#888888',
  },
  disclaimer: {
    color: `${StyleConstants.MUTE_COLOR}`,
  },
});

export function MortgagePercentage() {
  const style = useStyle();
  return (
    <>
      <div>
        <span className={style.percentage}>7.8%</span>
        <div className="help"></div>
      </div>
      <div>
        <Typography variant="caption" className={style.disclaimer}>
          This rate is based on the average value of credit offers from popular
          Indian banks.
        </Typography>
      </div>
    </>
  );
}
