import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Paper, Card, CardMedia, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import clsx from 'clsx'
import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '1rem',
    padding: '1rem',
    width: '25rem',
    height: '15rem',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  paper_compress: {
    width: '23rem',
    margin: '0.5rem',
    height: '15rem',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))




const ProductListing = (props) => {
  const css_reducer = useSelector(({ cssReducer }) => cssReducer);

  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const { main_drawer_open } = css_reducer || {};


  return (

    <Grid container>
      {
        cards.map((s, index) => {
          return (
            <Grid xs={12} sm={8} md={5} lg={4} xl={4}>
              <Paper elevation={11} key={index} className={clsx(classes.paper, {
                [classes.paper_compress]: main_drawer_open
              })}>
                <Typography>
                  What the hell is this
              </Typography>
              </Paper>

            </Grid>
          )
        })
      }
    </Grid>
  )
}


export default ProductListing;