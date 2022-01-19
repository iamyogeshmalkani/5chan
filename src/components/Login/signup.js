import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import Email from "@mui/icons-material/Email";
import { Password, Person, Visibility } from "@mui/icons-material";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConsfirmPass] = useState("");

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
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Password"
            defaultValue=""
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <TextField
            required
            id="outlined-required"
            label="Confirm Password"
            defaultValue=""
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            value={confirmpass}
            onChange={(e) => setConsfirmPass(e.target.value)}
          />
        </div>
        <div className="btn">
          <Button variant="contained">Signup</Button>
          <Button variant="contained">login</Button>
        </div>
      </div>
    </>
  );
};

export default Signup;
