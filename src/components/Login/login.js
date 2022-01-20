import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'; 
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';

import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Link from '@mui/material/Link';
import background from "../../icons/wave.jpg"
import { color } from '@mui/system';

// import {ReactComponent as ReactLogo} from "../../icons/wave.svg";

export default function Login() {
  const [type,settype] = useState("password");
  const [password,setpassword] = useState("");
  // const [type,settype] = useState("password");
  function showpassword(){
    type=="password" ? settype("text") : settype("password");

  }
  function handlechange(evt){
    setpassword(evt.target.value);
    
  
  }
  return (
<div className="Login">
  


<div className="loginheader" style={{backgroundImage:`url(${background})`,backgroundSize: "cover"}} >

<h1>Welcome To<br></br> Five Chan</h1>
<PersonIcon
className="personicon"

 />


</div>
  
   {/* <ReactLogo/> */}
      
       <TextField id="outlined-basic" label="Email" variant="outlined"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}  />
       
       <TextField id="outlined-basic" label="Password" type={type} value={password} variant="outlined" onChange={(e)=>{handlechange(e)}}  InputProps={{
        
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          
          endAdornment: (
            
            <InputAdornment position="end">
              {password!="" ? <IconButton onClick={()=>{showpassword()}}>
              <VisibilityIcon />

              </IconButton>:null}
              
             
            </InputAdornment>
          ),
        }} />
       <Button variant="contained" className="Loginbutton"   style={{
       backgroundColor: "skyblue",
       color: "white"
    }} >Login</Button>
       <Link href="/signup" underline="none" style={{
       
       color: "skyblue"
    }}>
        {"New User Register Here"}
      </Link>
  </div>
  )
  
}
