import { useEffect, useState, useMemo } from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  const [ipData, setIpData] = useState(null);

  useEffect(() => {
    const fetchIpInfo = async () => {
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`);
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error("Erro ao buscar IP info:", error);
      }
    };

    fetchIpInfo();
  }, []);

  const ipInfoCards = useMemo(() => {
    if (!ipData) return [];

    return [
      { label: "IP", value: ipData.ip },
      { label: "Cidade", value: ipData.city },
      { label: "Região", value: ipData.region },
      { label: "País", value: ipData.country },
      { label: "Provedor", value: ipData.org },
    ];
  }, [ipData]);

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Informações de Conexão</Typography>
      </Grid>

      {ipData ? (
        ipInfoCards.map((info, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: "1rem" }}>
              <Typography variant="subtitle1">{info.label}:</Typography>
              <Typography>{info.value}</Typography>
            </Paper>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography>Carregando dados de IP...</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Dashboard;
