import IconButton from '@mui/material/IconButton';
import SearchIcon from '../assets/search-alt-svgrepo-com.svg?react';

export default function IconButtons() {
  return (
    <IconButton 
      aria-label="search"
      sx={{
        borderRadius: '50%',
        padding: '15px',
        border: '1px solid #ccc',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
            backgroundColor: '#e6e6e691', 
        },
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
    </IconButton>    
  );
}