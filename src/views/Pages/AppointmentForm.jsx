import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, MenuItem, Select, FormControl, InputLabel, Snackbar, Divider} from '@mui/material';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    patientContact: '',
    appointmentDate: '',
    appointmentTime: '',
    doctorName: '',
    doctorSpecialization: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const doctorsList = [
    { name: 'Dr. Smith', specialization: 'Cardiologist' },
    { name: 'Dr. Johnson', specialization: 'Ophthalmologist' },
    { name: 'Dr. Williams', specialization: 'Dermatologist' },
    { name: 'Dr. Brown', specialization: 'Orthopedist' },
    { name: 'Dr. Jones', specialization: 'General Practitioner' },
    { name: 'Dr. Heally', specialization: 'Orthopedist' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to the backend)
    console.log('Appointment Details:', formData);
    setOpenSnackbar(true);
    setFormData({
      patientName: '',
      patientAge: '',
      patientContact: '',
      appointmentDate: '',
      appointmentTime: '',
      doctorName: '',
      doctorSpecialization: ''
    });
  };

  const handleDoctorChange = (e) => {
    const selectedDoctor = doctorsList.find((doctor) => doctor.name === e.target.value);
    setFormData({
      ...formData,
      doctorName: selectedDoctor.name,
      doctorSpecialization: selectedDoctor.specialization
    });
  };

  return (
    <Container sx={{ backgroundColor: 'white', padding: 3, borderRadius: 3, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom mb={2} mt={1}>Book an Appointment</Typography>
      <Divider sx={{ margin: '20px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
      <form onSubmit={handleSubmit}>
        <Grid container mt={5} spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Patient Name"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Patient Age"
              name="patientAge"
              type="number"
              value={formData.patientAge}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contact Number"
              name="patientContact"
              value={formData.patientContact}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment Date"
              name="appointmentDate"
              type="date"
              value={formData.appointmentDate}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Appointment Time"
              name="appointmentTime"
              type="time"
              value={formData.appointmentTime}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Doctor</InputLabel>
              <Select name="doctorName" value={formData.doctorName} onChange={handleDoctorChange} label="Doctor">
                {doctorsList.map((doctor, index) => (
                  <MenuItem key={index} value={doctor.name}>
                    {doctor.name} ({doctor.specialization})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} mt={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Book Appointment</Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Appointment booked successfully!"
      />
    </Container>
  );
};

export default AppointmentForm;
