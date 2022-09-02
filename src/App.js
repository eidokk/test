
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
import { Button } from '@mui/material';







function App(props) {
  
  
  const [show, setShow] = useState(false)
  const [number, setNumber] = useState (0)
  


  return (
      
    
    
    <div >
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
         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}       > 
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
    <h2>Choose your lucky number</h2> 
    <div style={{ display: "flex" }}> 
           
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setNumber(number + 1)
              }
            >
               +
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setNumber(number - 1)
              }
            >
              -
            </Button>
            <Button
              style={{ marginRight: "10px" }}
              variant='contained'
              onClick={() =>
                setNumber(0)
              }
            >
              Reset
            </Button>

          </div>

          <h3>Your number: {number}</h3>
        </div>
        )
        :
        <div></div>
      }
    </div>
  );
}  
        

export default App;



