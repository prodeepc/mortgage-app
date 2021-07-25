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
        <Typography variant="caption" className={style.disclaimer}>
          These calculators are provided only as general self-help Planning
          Tools. Results depend on many factors, including the assumptions you
          provide. We do not guarantee their accuracy, or applicability to your
          circumstances.
        </Typography>
      </div>
    </>
  );
}
