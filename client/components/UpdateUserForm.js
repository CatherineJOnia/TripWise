import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateUser,
  fetchSingleUser,
  selectSingleUser,
} from "../reducers/singleUserSlice";
import { TextField, Grid, Button } from "@mui/material";

const UpdateUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectSingleUser);

  const [name, setName] = useState("");
  // const [food, setFood] = useState("");
  // const [age, setAge] = useState("");

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, [dispatch, id]);

  const handleNameSubmit = async (event) => {
    event.preventDefault();
    await dispatch(updateUser({ id, name }));
    setName("");
  };

  // const handleFoodSubmit = async (event) => {
  //   event.preventDefault();
  //   await dispatch(updatePet({ id, food }));
  //   setFood("");
  // };

  // const handleAgeSubmit = async (event) => {
  //   event.preventDefault();
  //   await dispatch(updatePet({ id, age }));
  //   setAge("");
  // };

  const handleName = (event) => {
    setName(event.target.value);
  };

  // const handleFood = (event) => {
  //   setFood(event.target.value);
  // };

  // const handleAge = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <div>
      <h3 className="header" align="center">
        Update {user.name}'s information below:
      </h3>
      <form className="update-form" align="center" onSubmit={handleNameSubmit}>
        <TextField
          className="submission-field"
          label="Name"
          value={name || ""}
          onChange={handleName}
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
          Update Name
        </Button>
      </form>
      {/* <form className="update-form" align="center" onSubmit={handleFoodSubmit}>
        <TextField
          className="submission-field"
          label="Food"
          value={food || ""}
          onChange={handleFood}
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
          Update Food
        </Button>
      </form>
      <form className="update-form" align="center" onSubmit={handleAgeSubmit}>
        <TextField
          className="submission-field"
          label="Age"
          value={age || ""}
          onChange={handleAge}
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
          Update Age
        </Button>
      </form> */}
    </div>
  );
};

export default UpdateUser;
