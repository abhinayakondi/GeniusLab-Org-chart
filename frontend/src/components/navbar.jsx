import { styled, alpha } from '@mui/material/styles';
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import SearchButton from "../components/search-icon-button";
import AccountMenu from "./account-icon-menu";
import AdjustDrawer from "../components/adjust-drawer";
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '../assets/search-alt-svgrepo-com.svg?react';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid #ccc',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff' }}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontFamily="Inter"
            fontWeight={400}
            sx={{ display: { xs: 'none', sm: 'block' }, color: '#000', mr: 4 }}
          >
            Org chart
          </Typography>

          <SearchButton 
          sx={{mr: 2}}
          />

          <Box sx={{ flexGrow: 1 }} />
          <AdjustDrawer />
          <Divider 
            orientation="vertical" 
            variant="middle" 
            flexItem 
            sx={{ height: 24, my: 'auto', mx: 0.5, borderWidth: 1.2, borderColor: 'rgba(0, 0, 0, 0.12)' }} // Set height and center it vertically
          />
          <AccountMenu />
          
          <Search sx={{ color: '#000' }}>
              <SearchIconWrapper
              aria-label="search"
                  sx={{
                    '& svg': {
                        fontSize: '18px', 
                        width: '18px',
                        height: '18px',
                        position: 'relative',
                        top: '0px',    // Positive moves down, negative moves up
                        left: '0px',  // Positive moves right, negative moves left
                    }
                  }}
              >
                  <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder={isFocused ? "Search…" : ""} 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
