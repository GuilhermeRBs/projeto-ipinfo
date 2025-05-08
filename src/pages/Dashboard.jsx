import { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { IpContext } from "../contexts/ipContext";

const Dashboard = () => {
  const { isLoading, error } = useContext(IpContext);

  return (
    <Grid container spacing={2} padding={2}>
      <Grid item xs={12}>
        {isLoading ? (
          <Typography>Buscando informações...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography variant="h5">Informações carregadas</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
