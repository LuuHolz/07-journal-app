import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form action="">

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="email"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contrseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} >
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export { RegisterPage };
