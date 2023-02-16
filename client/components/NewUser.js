import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../reducers/userSlice";
import { TextField, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NewUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      addNewUser({
        username,
        password,
        name,
      })
    );
    setUsername("");
    setPassword("");
    setName("");
    navigate("/users");
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <label align="center" className="header">
          Register a new user!
        </label>
        <form
          align="center"
          className="form"
          id="new-user-form"
          onSubmit={handleSubmit}
        >
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              className="submission-field"
              label="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              className="submission-field"
              label="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              className="submission-field"
              label="Name"
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              className="submission-field"
              label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <TextField
              className="submission-field"
              label="Profile Picture"
              value={imageUrl}
              onChange={handleImageChange}
            />
          </Grid>
          <Grid
            item
            sx={{
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              className="submit-button"
              type="submit"
              sx={{
                bgcolor: "#55828B",
              }}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default NewUser;
