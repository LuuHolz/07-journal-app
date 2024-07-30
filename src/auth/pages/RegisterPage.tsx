import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

const formData = {
  email: 'luciana@gmail.com',
  password: '123456',
  displayName: 'Luciana Holzmann'
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.']
}

const RegisterPage = () => {

  const { displayName, email, password, onInputChange, formState,
          displayNameValid, emailValid, passwordValid,
        } =  useForm( formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
  }

  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit }>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre completo"
            placeholder="Nombre completo"
            fullWidth
            name='displayName'
            value={ displayName }
            onChange={ onInputChange }
            error={ !!displayNameValid }
            helperText={ displayNameValid }
          />
        </Grid>

        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} >
              <Button 
                type="submit"
                variant="contained" 
                fullWidth>
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
