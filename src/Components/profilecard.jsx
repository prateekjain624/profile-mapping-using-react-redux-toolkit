import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const Profilecard = ({ profile }) => {
  console.log(profile);

  return (
    <Card style={{ maxWidth: 345, margin: "10px auto" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://placehold.co/300x200?text=Profile+Image"
        alt={profile.name || "Profile Image"}
        style={{
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography variant="h5">{profile.name || "Unknown Name"}</Typography>
        <Typography variant="body2" color="textSecondary">
          {profile.job || "No Job Title Provided"}
        </Typography>

        <Link to={`/profile/${profile.id}`} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 10 }}
          >
            Summary
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default Profilecard;
