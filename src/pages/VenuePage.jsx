import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { Box, Card, CardContent, CardMedia, Fab, Fade, Grid, Paper, Toolbar, Typography } from '@mui/material'
import { EnergySavingsLeaf, Flight, Groups2, Hotel, Lens, Room, WifiTethering } from '@mui/icons-material'
import { HeroSection } from '../components/HeroSection'

const FeatureCard = ({ icon, title, text }) => (
    <Paper elevation={5} sx={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: { xs: 3, sm: 4, md: 5 },
        height: '100%',
        transition: '.2s ease',
        '&:hover': {
            transform: 'translateY(-5%)',
            transition: '.2s ease'
        }
    }}>
        <Box
            sx={{
                height: 50,
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                border: 3,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#5e61ffff',
            }}
            >
            {icon}
        </Box>
        <Typography
            sx={{
                fontSize: { xs: '1.2rem ', sm: '1.2rem', md: '1.5rem' },
                fontWeight: 'bold',
                color: '#5e61ffff',
            }}
        >
            {title}
        </Typography>
        <Typography>
            {text}
        </Typography>
    </Paper>
)

const LocationItem = ({ icon, title, text }) => (
    <Box sx={{
        display: 'flex',
        gap: 2,
        mb: 3,
    }}>
        <Box
            sx={{
                width: 40,
                height: 40,
                aspectRatio: '1 / 1',
                borderRadius: '50%',
                bgcolor: '#e3e3e3ff',
                color: '#dd0000ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {icon}
        </Box>
        <Box>
            <Typography fontWeight="bold">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {text}
            </Typography>
        </Box>
    </Box>
)

const ImageStatCard = ({ image, value, label }) => (
    <Card
        sx={{
            height: '100%',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            transition: 'all .35s ease',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: 8
            }
        }}
    >
        <Box
            sx={{
                height: 240,
                backgroundImage: `
                    linear-gradient(
                        to top,
                        rgba(0,0,0,.7),
                        rgba(0,0,0,.2)
                    ),
                    url(${image}) `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <CardContent
            sx={{
                position: 'absolute',
                bottom: 0,
                color: 'white'
            }}
        >
            <Typography variant="h3" fontWeight="bold" lineHeight={1}>
                {value}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
                {label}
            </Typography>
        </CardContent>
    </Card>
)

export default function VenuePage() {
    return (
        <>
            <NavBar />
            <Box component='main'>
                <HeroSection backgroundImgSrc="/congresoEntrada.webp">
                    <Box sx={{
                        width: 'fit-content',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        border: 2,
                        borderColor: '#fff',
                        borderRadius: 25,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        padding: { xs: '0.5rem', sm: '0.8rem', md: '0.5rem' },
                        zIndex: 999,
                        marginBottom: 3,
                    }}>
                        <Lens sx={{
                            height: { xs: '0.7rem', sm: '0.9rem', md: '1.25rem' },
                            color: '#8bff95ff'
                        }} />
                        <Typography sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1.25rem' },
                            color: '#fff',
                        }}>
                            MÉRIDA, MÉXICO
                        </Typography>
                    </Box>
                    <Typography
                        component='h1'
                        textAlign='center'
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' },
                            zIndex: 1000,
                            color: 'white',
                            fontWeight: 'bold',
                            textShadow: '3px 3px 7px #000000',
                            letterSpacing: '0.2px',
                            marginBottom: 3,
                            lineHeight: 1.1,
                            maxWidth: 900,
                        }}
                    >
                        Centro Internacional de Congresos de Yucatán
                    </Typography>
                    <Typography
                        component='h2'
                        textAlign='center'
                        sx={{
                            fontSize: { xs: '0.7rem', sm: '1.5rem', md: '1.5rem' },
                            zIndex: 1000,
                            color: 'white',
                            fontWeight: 'light',
                            textShadow: '3px 3px 7px #000000',
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                        }}
                    >
                        La sede más moderna y sustentable de la región, galardonada
                        con certificación LEED Platino, lista para inspirar a la
                        comunidad científica internacional.
                    </Typography>
                </HeroSection>

                <Box component='section' sx={{
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 6, md: 10 }
                }}>
                    <Typography
                        sx={{
                            fontSize: { xs: '1.5rem ', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        Modernidad y sustentabilidad
                    </Typography>
                    <Grid container spacing={3} sx={{
                        minHeight: 250
                    }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <FeatureCard
                                icon={<Groups2 />}
                                title='Gran Capacidad'
                                text='Con una superficie de 10,000 m² y 26 salones, puede albergar hasta 10,000 asistentes.'
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <FeatureCard
                                icon={<EnergySavingsLeaf />}
                                title='Certificación LEED'
                                text='Primer edificio en México con certificación LEED Platino en su categoría, prioritizando la eficiencia energética.'
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <FeatureCard
                                icon={<WifiTethering />}
                                title='Alta Conectividad'
                                text='Infraestructura de fibra óptica y Wi-Fi de alta calidad para soportar miles de asistentes simultáneos.'
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box component='section' sx={{
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 6, md: 10 }
                }}>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        El recinto en cifras
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 7 }}>
                            <ImageStatCard
                                image="/centro1.jpg"
                                value="26"
                                label="Salones multifuncionales"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }}>
                            <ImageStatCard
                                image="/centro2.jpg"
                                value="10,000"
                                label="Asistentes simultáneos"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 4 }}>
                            <ImageStatCard
                                image="/centro3.jpg"
                                value="9,430 m²"
                                label="Área para eventos"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <ImageStatCard
                                image="/centroconvenciones.webp"
                                value="50,000 m²"
                                label="Superficie total"
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box component='section' sx={{
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 6, md: 10 }
                }}>
                    <Paper elevation={5} sx={{
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        padding: { xs: 4, sm: 5, md: 6 },
                        height: '100%'
                    }}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 5, md: 5 }}>
                                <Typography variant="h4" fontWeight="bold" gutterBottom>
                                    Ubicación privilegiada
                                </Typography>
                                <Typography variant="body1" color="text.secondary" mb={4}>
                                    Situado en el corazón del Distrito de Congresos de Yucatán,
                                    rodeado de hoteles, restaurantes y puntos culturales.
                                </Typography>

                                <LocationItem
                                    icon={<Room />}
                                    title='Dirección'
                                    text='C-62 #294 entre Av. Cupules y Av. Colón, Centro. Mérida, Yucatán.'
                                />
                                <LocationItem
                                    icon={<Hotel />}
                                    title='Alojamiento'
                                    text='Más de 2,000 habitaciones de hotel a pocas calles de distancia.'
                                />
                                <LocationItem
                                    icon={<Flight />}
                                    title='Transporte'
                                    text='A solo 20 minutos del Aeropuerto Internacional de Mérida (MID).'
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 7, md: 7 }}>
                                <Paper elevation={3} sx={{
                                    width: '100%',
                                    height: { xs: 350, sm: '100%' },
                                    borderRadius: 2,
                                    overflow: 'hidden',
                                }}>
                                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Nq4NPtYNPWUUEkhnz3JnCANa6bv83MM&amp;ehbc=2E312F" width="100%" height="100%"></iframe>
                                    {/* <iframe className='w-100 h-100' loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1277479236255!2d-89.6214066!3d20.987515699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56715767028947%3A0x754d8df3a5a5ba44!2sCentro%20Internacional%20de%20Congresos%20de%20Yucat%C3%A1n!5e0!3m2!1ses-419!2sar!4v1761691719116!5m2!1ses-419!2sar" style={{ border: 0 }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
