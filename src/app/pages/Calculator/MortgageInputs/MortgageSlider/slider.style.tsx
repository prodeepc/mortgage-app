import { withStyles, Slider, makeStyles } from '@material-ui/core';
import { StyleConstants } from 'styles/StyleConstants';

export const PrettySlider = withStyles({
  root: {
    color: `${StyleConstants.PRIMARY_COLOR}`,
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export const PrettySliderLabels = makeStyles({
  root: {
    fontSize: '1.4rem',
  },
});
