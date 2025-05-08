import { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

const Dashboard = ({ setIpData, setError, isLoading, setIsLoading }) => {
  useEffect(() => {
    const fetchIpInfo = async () => {
      setIsLoading(true); // Inicia carregamento
      try {
        const response = await fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`);
        if (!response.ok) throw new Error("Falha na requisição da API");

        const data = await response.json();
        setIpData(data);
        setError(null);
      } catch (error) {
        console.error("Erro ao buscar informações de IP:", error);
        setError("Não foi possível obter as informações de conexão.");
      } finally {
        setIsLoading(false); // Finaliza carregamento
      }
    };

    fetchIpInfo();
  }, [setIpData, setError, setIsLoading]);

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        {isLoading ? (
          <Typography>Buscando informações...</Typography>
        ) : (
          <Typography variant="h5">Informações carregadas</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
