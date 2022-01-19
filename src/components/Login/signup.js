import React, { useState } from "react";

import Link from '@mui/material/Link';

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import Email from "@mui/icons-material/Email";
import { Password, Person, Visibility } from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Signup = () => {
  const [type,settype] = useState("password");
  const [typeconfirm,settypeconfirm] = useState("password");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmPass] = useState("");

  function showpassword(str){
    if(str=="pass"){
      type=="password" ? settype("text") : settype("password");

    }
    else{
      typeconfirm=="password" ? settypeconfirm("text") : settypeconfirm("password");

    }
    

  }
  function handlechange(evt,str){
    if(str==="pass"){
      setpassword(evt.target.value);
    }
    else{
      setconfirmPass(evt.target.value);
    }
   
    
  
  }
 

  return (
    <>
      <div className="Login">
        <h1 className="heading">SIGN-UP</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        />
       
          <TextField
            required
            id="outlined-required"
            label="Username"
            defaultValue=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        

        
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        

        
        <TextField id="outlined-basic" label="Password" type={type} value={password} variant="outlined" onChange={(e)=>{handlechange(e,"pass")}}  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          
          endAdornment: (
            
            <InputAdornment position="end">
              {password!="" ? <IconButton onClick={()=>{showpassword("pass")}}>
              <VisibilityIcon />

              </IconButton>:null}
              
             
            </InputAdornment>
          ),
        }} />
       

       
       <TextField id="outlined-basic" label="Confirm Password" type={typeconfirm} value={confirmpass} variant="outlined" onChange={(e)=>{handlechange(e,"confirmpass")}}  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          
          endAdornment: (
            
            <InputAdornment position="end">
              {password!="" ? <IconButton onClick={()=>{showpassword("confirmpass")}}>
              <VisibilityIcon />

              </IconButton>:null}
              
             
            </InputAdornment>
          ),
        }} />
       
        
          <Button variant="contained">Signup</Button>
          <Link href="/login" underline="none">
              {"Already have an account"}
          </Link>
          
         
        
      </div>
    </>
  );
};

export default Signup;
