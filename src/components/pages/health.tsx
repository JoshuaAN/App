import React, { useState } from 'react';
import { Container, TextField, MenuItem, Typography, Button, Box } from '@mui/material';
import './health.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    height: '',
    age: '',
    weight: '',
    sex: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    console.log(formData);
    // Here you could also send the data to a server or perform other actions
  };

  return (
    <Container className="test" maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Enter Your Health Details
      </Typography>
      <Box component="form" onSubmit={handleSave} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="height"
          label="Height (cm)"
          name="height"
          autoComplete="height"
          autoFocus
          value={formData.height}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="age"
          label="Age"
          name="age"
          autoComplete="age"
          value={formData.age}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="weight"
          label="Weight (kg)"
          name="weight"
          autoComplete="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <TextField
          select
          margin="normal"
          required
          fullWidth
          id="gender"
          label="Sex"
          name="sex"
          value={formData.sex}
          onChange={handleChange}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </TextField>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}

export default MyForm;
