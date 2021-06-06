import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { IconButton, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronRight, ChevronLeft, Mail, MoveToInbox, Dashboard, ViewList } from '@material-ui/icons';
import { getTasks } from '../Reducers/Index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    background: 'lightgrey'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: '240px',
    width: 'calc(100% - 240px)',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 24,
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: '240px',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: '240px',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    color: "#000",
    backgroundColor: "lightgrey",
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    backgroundColor: "lightgrey",
    color: "#000",
    width: theme.spacing(2) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  menuIcons: {
    color: "#7D7D7D",
  },
  textFont: {
    fontFamily: "Pattaya"
  },
}))



const App = ({ children }) => {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [listItems, setListItems] = useState(['Dashboard', 'Products', 'Send email', 'Drafts']);
  const dispatch = useDispatch();
  const initialSlice = useSelector((state) => state.indexReducer);


  console.log('this is the initial State: ', initialSlice);

  useEffect(() => {
    dispatch(getTasks())
  }, []);


  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleClick = (index, text) => {
    setSelectedIndex(index);
    if (text == 'Dashboard') {
      history.push({
        pathname: `/dashboard/main`
      })
    } else {
      history.push({
        pathname: `/dashboard/${text.toLowerCase()}`
      })
    }
  }


  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            className={
              clsx(classes.menuButton, {
                [classes.hide]: open,
              })
            }
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.textFont}>
            Shopping Mart
            </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose} color="primary">
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List >
          {
            listItems.map((text, index) => {
              return (
                <ListItem
                  key={index}
                  button
                  selected={index === selectedIndex}
                  onClick={() => handleClick(index, text)}
                >
                  <ListItemIcon className={classes.menuIcons}>
                    {index === 0 ? (
                      <Dashboard />
                    ) : index === 1 ? (
                      <ViewList />
                    ) : index === 2 ? (
                      <Mail />
                    ) : (
                      <MoveToInbox />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })
          }
        </List>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default App;