import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { Profiles } from "./adminReducer/adminSlice";
import {
  addProfileThunk,
  fetchProfilesThunk,
  deleteProfileThunk,
  updateProfileThunk,
} from "./adminReducer/adminThunk";
import fetchCoordinates from "./fetchingLocation";

const AdminDashboard = () => {
  const profile = useSelector(Profiles);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    job: "",
    location: "",
    id: null,
  }); // Form data
  const [open, setOpen] = useState(false); // Dialog state

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    if (formData.id === null) {
      // Create new profile
      const coordinates = await fetchCoordinates(formData.location);

      const newProfile = {
        name: formData.name,
        job: formData.job,
        location: formData.location,
        id: new Date().toString(),
        coordinates: coordinates,
      };

      dispatch(addProfileThunk({ profile: newProfile }));
    } else {
      // Update existing profile
      const updatedProfile = {
        ...formData,
      };
      dispatch(updateProfileThunk(updatedProfile));
    }
    handleClose();
  };

  // Handle delete
  const handleDelete = (id) => {
    dispatch(deleteProfileThunk(id));
  };

  // Open dialog for adding/editing
  const handleOpen = (
    profile = { name: "", job: "", location: "", id: null }
  ) => {
    setFormData(profile);
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchProfilesThunk());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* Add Profile Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        style={{ marginBottom: "20px" }}
      >
        Add Profile
      </Button>

      {/* Profiles Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Job</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {profile.length > 0 ? (
              profile.map((profile) => (
                <TableRow key={profile.id}>
                  <TableCell>{profile.name}</TableCell>
                  <TableCell>{profile.job}</TableCell>
                  <TableCell>{profile.location}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleOpen(profile)}
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(profile.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} style={{ textAlign: "center" }}>
                  No profiles to display
                </TableCell>
              </TableRow>
            )}
            {}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for Add/Edit */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {formData.id ? "Edit Profile" : "Add Profile"}
        </DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            name="job"
            label="Job"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.job}
            onChange={handleInputChange}
          />
          <TextField
            name="location"
            label="Location (Address)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.location}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            {formData.id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
