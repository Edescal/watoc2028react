import { Box, Grid, IconButton, List, ListItem, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: '#8f8f8fff' }}>
            <Grid container spacing={4} px={{ xs: 3, md: 8 }} py={6}>
                <Grid  size={{ xs: 12, md: 3 }} >
                    <Typography variant="h6" fontWeight="bold">
                        Centro Internacional de Congresos de Yucatán
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Sede moderna y sustentable<br />
                        Certificación LEED Platino
                    </Typography>
                </Grid>

                <Grid  size={{ xs: 12, md: 3 }} >
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Navegación
                    </Typography>
                    {['Inicio', 'Sede', 'Programa', 'Registro', 'Contacto'].map(item => (
                        <Typography
                            key={item}
                            variant="body2"
                            sx={{ cursor: 'pointer', mb: 1 }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Grid>

                <Grid  size={{ xs: 12, md: 3 }} >
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Ubicación
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Mérida, Yucatán<br />
                        México<br />
                        contacto@evento.org
                    </Typography>
                </Grid>

                <Grid  size={{ xs: 12, md: 3 }} >
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                        Legal
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                        Aviso de privacidad
                    </Typography>
                    <Typography variant="body2">
                        Términos y condiciones
                    </Typography>
                </Grid>
            </Grid>

            <Box
                sx={{
                    textAlign: 'center',
                    py: 2,
                    bgcolor: '#000',
                    color: 'white'
                }}
            >
                <Typography variant="caption">
                    Copyright © 2025 | Cinvestav | México
                </Typography>
            </Box>
        </Box>
    )
}

