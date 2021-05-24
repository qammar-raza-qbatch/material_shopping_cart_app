import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { IconButton, CssBaseline, AppBar, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ChevronRight, ChevronLeft, Mail, MoveToInbox } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
    })
  },
  drawerClose: {
    // width: '240px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
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
  }
}))



const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [listItems, setListItems] = useState(['Inbox', 'Starred', 'Send email', 'Drafts']);


  const handleDrawerClose = () => {
    setOpen(false);
  }

  const handleDrawerOpen = () => {
    console.log('Open Drawer Button is clicked');
    setOpen(true);
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
          <Typography variant="h6" noWrap>
            Mini variant drawer
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            listItems.map((text, index) => {
              return (
                <ListItem key={index} button>
                  <ListItemIcon>
                    {
                      index % 2 === 0 ? <MoveToInbox /> : <Mail />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            })
          }
        </List>
      </Drawer>
    </div>
  )
}

export default App;
