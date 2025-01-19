import React, { useEffect } from "react";
import { Card, CardHeader, Typography, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfilesThunk } from "./adminReducer/adminThunk";
import { Profiles } from "./adminReducer/adminSlice";
import Mapcomponent from "./Mapcomponent";

export const ProfileDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const profiles = useSelector(Profiles);

  // Fetch profiles if not already loaded
  useEffect(() => {
    if (profiles.length === 0) {
      dispatch(fetchProfilesThunk());
    }
  }, [dispatch, profiles]);

  // Find the profile with the matching ID
  const profile = profiles.find((profile) => profile.id === id);

  // Handle case where profile is not found
  if (!profile) {
    return <Typography variant="h5">Profile not found.</Typography>;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">{profile.name}</Typography>
        <Typography variant="body1">{profile.job}</Typography>
        <Typography variant="h3">Location</Typography>
        <Mapcomponent location={profile.coordinates} />
      </CardContent>
    </Card>
  );
};
