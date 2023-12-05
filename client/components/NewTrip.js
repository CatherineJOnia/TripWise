import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTrip } from "../reducers/tripSlice";
import { useNavigate } from "react-router-dom";
import { TextField, Grid, Button } from "@mui/material";

const NewTrip = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageUrl(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(
      addNewTrip({
        destination,
        imageUrl,
        description,
      })
    );
    setDestination("");
    setImageUrl("");
    setDescription("");
    navigate("/trips");
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
          Plan a new trip!
        </label>
        <form
          align="center"
          className="form"
          id="new-trip-form"
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
              placeholder="Destination"
              value={destination}
              onChange={handleDestinationChange}
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
              placeholder="Inspiration Picture"
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
            <TextField
              className="submission-field"
              placeholder="Describe the Trip"
              value={description}
              onChange={handleDescriptionChange}
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

export default NewTrip;
