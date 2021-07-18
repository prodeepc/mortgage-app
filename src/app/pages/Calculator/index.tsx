import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Slider,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    marginTop: '30px',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '40px',
  },
  title: {
    marginTop: '0',
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
    >
      <Box p={3}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

export function Calculator() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSliderChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ) => {
    setSliderValue(newValue as number);
  };

  return (
    <>
      <Container maxWidth="sm">
        <div className={classes.content}>
          <h1 className={classes.title}>Calculate Mortgage</h1>
          <Paper>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="All" />
              <Tab disabled label="New" />
              <Tab disabled label="Resellers" />
            </Tabs>
          </Paper>

          <TabPanel value={value} index={0}>
            <ul>
              <li>
                <label htmlFor="">Price</label>
                <span className="price">$1000000</span>
                <div>
                  <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="continuous-slider"
                  />
                </div>
              </li>
              <li>
                <label htmlFor="">Length of loan</label>
                <span>10 years</span>
                <Slider
                  value={sliderValue}
                  onChange={handleSliderChange}
                  aria-labelledby="continuous-slider"
                />
              </li>
              <li>
                <label htmlFor="">Down payment</label>
                <span>$100000</span>
                <Slider
                  value={sliderValue}
                  onChange={handleSliderChange}
                  aria-labelledby="continuous-slider"
                />
              </li>
            </ul>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <span>3.8%</span>
              <p className="help"></p>
            </Grid>
            <Grid item xs={6}>
              <span>$10,663</span>
              <span>/mo</span>
            </Grid>
            <Grid item xs={6}>
              <small>
                This rate is based on the average value of credit offers from
                popular Indian banks.
              </small>
            </Grid>
            <Grid item xs={6}>
              <button className="primary">See Details &gt;</button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
