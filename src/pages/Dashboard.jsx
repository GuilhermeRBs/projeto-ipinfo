import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard de Informações
        </Typography>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6">Endereço IP</Typography>
          <Typography variant="body1">...</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6">Localização</Typography>
          <Typography variant="body1">...</Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6">Provedor de Internet</Typography>
          <Typography variant="body1">...</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
