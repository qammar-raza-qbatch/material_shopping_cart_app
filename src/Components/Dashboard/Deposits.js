import React, { Fragment } from 'react';
import Title from './Title';
import { Typography, Link } from '@material-ui/core';



const DepositComponent = () => {
  return (
    <Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography style={{ flex: 1 }} color="textSecondary">
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="secondary" href="#">
          View Balnce
          </Link>
      </div>
    </Fragment>
  );
}

export default DepositComponent;