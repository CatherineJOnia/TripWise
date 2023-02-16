import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateTrip,
  fetchSingleTrip,
  selectSingleTrip,
} from "../reducers/singleTripSlice";
import { TextField, Grid, Button } from "@mui/material";

const UpdateTrip = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const trip = useSelector((state) => state.trip);

  const [destination, setDestination] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchSingleTrip(id));
  }, [dispatch, id]);

  const handleDestinationSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateTrip({ id, destination }));
    setDestination("");
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateTrip({ id, imageUrl }));
    setImageUrl("");
  };

  const handleDescriptionSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateTrip({ id, description }));
    setDescription("");
  };

  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  const handleImage = (event) => {
    setImageUrl(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h3 className="header" align="center">
        Update {trip.destination}'s plan below:
      </h3>
      <form
        className="update-form"
        algin="center"
        onSubmit={handleDestinationSubmit}
      >
        <TextField
          className="submission-field"
          label="Destination"
          value={destination || ""}
          onChange={handleDestination}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="update-button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}
        >
          Update Destination
        </Button>
      </form>
      <form className="update-form" align="center" onSubmit={handleImageSubmit}>
        <TextField
          className="submission-field"
          label="Image URL"
          value={imageUrl || ""}
          onChange={handleImage}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="update-button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}
        >
          Update Photo
        </Button>
      </form>
      <form
        className="update-form"
        align="center"
        onSubmit={handleDescriptionSubmit}
      >
        <TextField
          multiline
          rows={4}
          className="submission-field"
          label="Description"
          value={description || ""}
          onChange={handleDescription}
          sx={{
            bgcolor: "#FFFFFF",
          }}
        />
        <Button
          variant="contained"
          className="button"
          align="center"
          type="submit"
          sx={{ bgcolor: "#55828B", width: 150, ml: 1.5 }}
        >
          Update Description
        </Button>
      </form>
    </div>
  );
};

export default UpdateTrip;
