import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";
import Profilecard from "./profilecard";
import { useSelector, useDispatch } from "react-redux";
import { Profiles } from "./adminReducer/adminSlice";
import { fetchProfilesThunk } from "./adminReducer/adminThunk";

const ProfileList = () => {
  const profiles = useSelector(Profiles);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  useEffect(() => {
    dispatch(fetchProfilesThunk());
  }, [dispatch]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLocaleLowerCase();
    const filtered = profiles.filter((profile) => {
      return profile.name.toLocaleLowerCase().includes(lowerCaseQuery);
    });
    setFilteredProfiles(filtered);
  }, [searchQuery, profiles]);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(filteredProfiles);

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search Profile"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearchQuery}
        margin="normal"
      />
      {filteredProfiles.length === 0 ? (
        <p>No profiles found</p>
      ) : (
        <Grid container spacing={2}>
          {filteredProfiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} key={profile.id}>
              <Profilecard profile={profile} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ProfileList;
