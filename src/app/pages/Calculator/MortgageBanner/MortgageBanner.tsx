import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  root: {
    maxWidth: '100%',
  },
});

export function MortgageBanner() {
  const bannerStyle = useStyle();
  return <img src="/images/4221116.jpg" className={bannerStyle.root} alt="" />;
}
