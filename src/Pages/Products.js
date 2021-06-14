import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import ProductsComponent from '../Components/Products/Products';



const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
}))



const Products = () => {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}>
        <Container className={classes.container} maxWidth="lg">
          <ProductsComponent />
        </Container>
      </div>
    </main>
  )
}


export default Products;