import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser, userList } from "../reducers/userSlice";
import NewUser from "./NewUser";

import StyledAllGrid from "./AllItemsGrid";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(userList);

  const removeUser = async (user) => {
    dispatch(deleteUser(user.id));
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <StyledAllGrid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {users && users.length
        ? users.map((user) => {
            return (
              <div className="user" key={user.id}>
                <Card
                  raised
                  sx={{
                    width: 280,
                    ml: 10,
                    mb: 3,
                    padding: "0.1em",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={user.imageUrl}
                    height="200"
                    width="140"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      align="center"
                    >
                      {user.name}
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {pet.name} is a {pet.age} year-old {pet.species}
                    </Typography> */}
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <DeleteIcon
                      size="small"
                      onClick={() => removeUser(user)}
                      color="#364958"
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        "&:hover": {
                          cursor: "pointer",
                          color: "#3B6064",
                        },
                      }}
                    />

                    <Button
                      size="small"
                      component={Link}
                      to={`/users/${user.id}`}
                      key={user.id}
                      sx={{
                        display: "flex",
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </StyledAllGrid>
  );
};

export default Users;
