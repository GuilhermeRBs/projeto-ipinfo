import React, { useState, useMemo } from 'react';
import Dashboard from './Dashboard';
import DashboardCard from '../components/DashboardCard';

const Home = () => {
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // UseMemo para otimizar a exibição da localização
  const formattedLocation = useMemo(() => {
    if (!ipData) return "Carregando...";
    return `${ipData.city}, ${ipData.region}, ${ipData.country}`;
  }, [ipData]);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard</h1>
      <Dashboard setIpData={setIpData} setError={setError} isLoading={isLoading} setIsLoading={setIsLoading} />

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
