import React, {Component} from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import {withStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';

const styles = theme => ({
    grow: {
      flexGrow: 1
    },
    search: {
      position: 'relative',
      borderRadius: '4px',
      backgroundColor: '#c0c0c0',
      marginLeft: 0,
      width: '300px',
    },
    searchIcon: {
      width: theme.spacing(4),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:'#000000'
    },
    inputInput: {
      paddingTop: theme.spacing,
      paddingRight: theme.spacing,
      paddingBottom: theme.spacing,
      paddingLeft: theme.spacing(4),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200
        }
      }
    },
    avatar: {
      width: 50,
      height: 50,
    },
    appHeader:{
      backgroundColor:'#263238'
    },
    hr:{
      height:'1.5px',
      backgroundColor:'#f2f2f2',
      marginLeft:'5px',
      marginRight:'5px'
    }
  })
  

class Header extends Component {
    
    render(){
        const { classes } = this.props;
        return (
            <div>
            <AppBar className={classes.appHeader}>
              <Toolbar>
                
                <span className="header-title">Image Viewer</span>
                <div className={classes.grow}/>
    
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase 
                        placeholder="Search…" 
                        classes={{
                        input: classes.inputInput
                      }}/>
                  </div>
                
    
                  <div>
                    <IconButton >
                      <Avatar alt="Profile Pic" src="profile.png" className={classes.avatar} style={{border: "1px solid #fff"}}/>
                    </IconButton>
                  </div>
                  </Toolbar>
            </AppBar>
            </div>)
      }}
    

    export default withStyles(styles)(Header)
    