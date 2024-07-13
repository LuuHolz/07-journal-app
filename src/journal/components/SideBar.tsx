import { TurnedInNot } from '@mui/icons-material';
import { Box, Drawer, Typography, Toolbar, Divider, ListItem, List, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';

const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth } , flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent" // uso TEMPORARY si quiere que amaprezca y desaparezca
            open
            sx={{
              display: { xs: 'block'},
              '& .MuiDreawer-paper': { boxSizing: 'border-box', width: drawerWidth }  
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                    Luciana Holzmann
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>

                                <Grid container direction="column">
                                    <ListItemText primary={ text }/>
                                    <ListItemText secondary={ 'Pendientes de hacer' }/>

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}

export { SideBar }