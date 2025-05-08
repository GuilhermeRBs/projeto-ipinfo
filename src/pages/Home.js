import React, { useContext, useMemo } from 'react';
import Dashboard from './Dashboard';
import DashboardCard from '../components/DashboardCard';
import { IpContext } from '../contexts/ipContext.js';

const Home = () => {
  const { ipData, error } = useContext(IpContext);

  const formattedLocation = useMemo(() => {
    if (!ipData) return "Carregando...";
    return `${ipData.city}, ${ipData.region}, ${ipData.country}`;
  }, [ipData]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <Dashboard />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!error && ipData && (
        <>
          <DashboardCard title="IP" value={ipData.ip} />
          <DashboardCard title="Localização" value={formattedLocation} />
        </>
      )}
    </div>
  );
};

export default Home;
