import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const TotalKaryawan = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item xs={8}>
            <Typography variant="h6" component="div">
              Total Data Karyawan
            </Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              5
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
              <Typography variant="body2" sx={{ mr: 1 }}>
                2022
              </Typography>
              <IconButton size="small" color="primary">
                <span style={{ borderRadius: '50%', background: 'blue', width: '8px', height: '8px', display: 'inline-block' }} />
              </IconButton>
              <Typography variant="body2" sx={{ mx: 1 }}>
                2023
              </Typography>
              <IconButton size="small" color="primary">
                <span style={{ borderRadius: '50%', background: 'lightblue', width: '8px', height: '8px', display: 'inline-block' }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PeopleAltOutlinedIcon fontSize="large" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default TotalKaryawan;
