
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';








function App(props) {
  
  
  const [show, setShow] = useState(false)
  
  


  return (
    <div> 
<Box sx={{ flexGrow: 1 }}>
       <AppBar position="static">
         <Toolbar>
           <IconButton
             size="large"
             edge="start"
             color="inherit"
             aria-label="open drawer"
             sx={{ mr: 2 }}
           >
             <MenuIcon />
           </IconButton>
           <Typography
             variant="h6"
             noWrap
             component="div"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
           >
             MUI
           </Typography>
         
          
         </Toolbar>
       </AppBar>
     </Box>
      <Badge
      badgeContent={1} color="primary"
      style={{ margin: "20px" }}
      

        onClick={() =>
          setShow(!show)
        }
        variant='contained'
      >
        {show == true ? "Hide" : "Show"}
        <MailIcon color="action" />
      </Badge>
      {show == true ?
        (<div style={{ margin: "5px" }}>
          <h4>Im here to inform u that u owe me $100</h4>
          
          <div style={{ display: "flex" }}>

            </div>
           

            
      
        </div>
        )
        :
      <div style={{ margin: "10px" }}>
        
<h2> Chose gender</h2>
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Alien" />
      </RadioGroup>
    </FormControl>

<div>
  <Box sx={{ '& > :not(style)': { m: 1 } }}>
    
  <Fab 
  color="primary"
  enabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
    <h2 style={{ margin: "10px" }}>Likes</h2>
       </div>   
 
       

      </div>
        }
       </div>
          
  );
}

export default App;



