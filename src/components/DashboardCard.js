import React from 'react';
import { Card, CardContent } from '@mui/material';

const DashboardCard = ({ title, value }) => (
  <Card sx={{ minWidth: 275, marginBottom: 2 }}>
    <CardContent>
      <h3>{title}</h3>
      <p>{value}</p>
    </CardContent>
  </Card>
);

export default DashboardCard;
