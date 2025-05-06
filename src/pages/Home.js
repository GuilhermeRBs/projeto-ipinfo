import React from 'react';
import DashboardCard from '../components/DashboardCard';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <DashboardCard title="IP" value="Carregando..." />
      <DashboardCard title="Localização" value="Carregando..." />
    </div>
  );
};

export default Home;
