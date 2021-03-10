import React, { useContext } from 'react'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/NavBarStyles";
import {ThemeContext} from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';

const content = {
  english: {
    search: 'Search',
    flag: '🇬🇧'
  },
  french: {
    search: 'Chercher',
    flag: '🇫🇷 '
  },
  spanish: {
    search: 'Buscar',
    flag: '🇪🇸'
  },
  portuguese: {
    search: 'Pesquisar',
    flag: '🇵🇹'
  }
};

function Navbar(props) {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const{language} = useContext(LanguageContext);
    const{classes} = props;
    const {search, flag} = content[language];
    return (
        <div className={classes.root}>
        <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
          <ToolBar>
            <IconButton className={classes.menuButton} color='inherit'>
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant='h6' color='inherit'>
              App Name 
            </Typography>
            <Switch onChange={toggleTheme}/>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                placeholder={search} 
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                />
              </div>
          </ToolBar>
        </AppBar>
      </div>
 
      
    );
  }

export default withStyles(styles)(Navbar);
