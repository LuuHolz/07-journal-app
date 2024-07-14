import { SaveOutlined } from '@mui/icons-material';
import { Grid, Typography, Button, TextField } from '@mui/material';
import { ImageGallery } from '../components/index'

const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light'>28 de agosto, 2024</Typography>
        </Grid>

        <Grid item>
            <Button color='primary' sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                variant='filled'
                fullWidth
                placeholder='Ingrese un título'
                label="Título"
                sx={{ border: 'none', mb: 1 }}
            />

            <TextField
                type="text"
                variant='filled'
                fullWidth
                placeholder='¿Qué sucedió en el día de hoy?'
                minRows={ 5 }
            />
        </Grid>

        <ImageGallery/>

    </Grid>
  )
}

export { NoteView }