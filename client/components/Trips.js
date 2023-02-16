import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips, deleteTrip, tripList } from "../reducers/tripSlice";
// import NewTrip from "./NewTrip";

import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import StyledAllGrid from "./AllItemsGrid";

const Trips = () => {
  const dispatch = useDispatch();
  const trips = useSelector(tripList);

  const removeTrip = async (trip) => {
    dispatch(deleteTrip(trip.id));
  };

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  return (
    <div id="rooms" className="column">
      <StyledAllGrid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {trips && trips.length
          ? trips.map((trip) => {
              return (
                <div className="trip" key={trip.id}>
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
                      image={trip.imageUrl}
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
                        {trip.destination}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        Plan for {trip.destination}!
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between" }}>
                      <DeleteIcon
                        size="small"
                        onClick={() => removeTrip(trip)}
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
                        to={`/trips/${trip.id}`}
                        key={trip.id}
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
        {/* <div className="new-room-form">
          <NewRoom />
        </div> */}
      </StyledAllGrid>
    </div>
  );
};

export default Trips;
