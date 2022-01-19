import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'; 
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';

import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

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
  

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.8" d="M0,288L34.3,261.3C68.6,235,137,181,206,170.7C274.3,160,343,192,411,202.7C480,213,549,203,617,165.3C685.7,128,754,64,823,58.7C891.4,53,960,107,1029,144C1097.1,181,1166,203,1234,213.3C1302.9,224,1371,224,1406,224L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>
<h1>Welcome hrami</h1>
  
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
       <Button variant="contained">Login</Button>
       <Link href="/signup" underline="none">
        {"New User Register Here"}
      </Link>
  </div>
  )
  
}
