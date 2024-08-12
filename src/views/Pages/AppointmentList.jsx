import React, { useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Grid,
  Button
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const AppointmentList = () => {
  const appointments = Array.from({ length: 50 }, (_, index) => ({
    number: index + 1,
    patientName: `Patient ${index + 1}`,
    patientAge: Math.floor(Math.random() * 60) + 18,
    patientContact: `555-555-${(index + 1).toString().padStart(4, '0')}`,
    appointmentDate: `2024-08-${(index % 300) + 1}`.padStart(10, '0'),
    appointmentTime: `${(Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
    doctorName: `Dr. ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][index % 5]}`,
    doctorSpecialization: ['Cardiologist', 'Ophthalmologist', 'Dermatologist', 'Orthopedist', 'General Practitioner'][index % 5]
  }));

  const [selectedDate, setSelectedDate] = useState(null);

  const filteredAppointments = selectedDate
    ? appointments.filter(
        (appointment) =>
          dayjs(appointment.appointmentDate).format('YYYY-MM-DD') ===
          selectedDate.format('YYYY-MM-DD')
      )
    : appointments;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Appointment List
      </Typography>
      <Grid container  spacing={3} justifyContent={"end"} alignItems="center" marginBottom={2}>
        <Grid item >
          <DatePicker
            label="Filter by Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={() => setSelectedDate(null)} size='small' >Clear</Button> 
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table  aria-label="appointment table">
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Patient Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Specialization</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAppointments.map((appointment, index) => (
              <TableRow key={index}>
                <TableCell>{appointment.number}</TableCell>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.patientAge}</TableCell>
                <TableCell>{appointment.patientContact}</TableCell>
                <TableCell>{appointment.appointmentDate}</TableCell>
                <TableCell>{appointment.appointmentTime}</TableCell>
                <TableCell>{appointment.doctorName}</TableCell>
                <TableCell>{appointment.doctorSpecialization}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AppointmentList;
