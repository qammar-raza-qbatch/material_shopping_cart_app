import React from 'react';
import DashboardComponent from '../Components/Dashboard/Dashboard';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'hidden',
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
}))

const Dashboard = () => {

  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer}>
        <Container className={classes.container} maxWidth="lg">
          <DashboardComponent />
        </Container>
      </div>
    </main>
  )
}


export default Dashboard