import React, { Fragment } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Label, Line } from 'recharts';


import Title from './Title';




const useStyles = makeStyles((theme) => ({
  an: {
    textAnchor: "middle",
    fill: theme.palette.text.secondary
  }
}));



const createData = (time, amount) => {
  return { time, amount }
}


const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];



const Charts = () => {

  const theme = useTheme();
  const classes = useStyles();

  return (
    <Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              className={classes.an}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </Fragment>

  )
}

export default Charts;