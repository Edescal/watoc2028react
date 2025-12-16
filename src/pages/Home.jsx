import { Box, Button, Card, CardContent, CardMedia, Fab, Fade, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ScrollTop } from '../components/ScrollTop'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import VenueCarousel from '../components/carousel/VenueCarousel'
import { HeroSection } from '../components/HeroSection'
import { Flight, Hotel, Room } from '@mui/icons-material'
import { useNavigate } from 'react-router'

const CongressCard = ({ url, name, subtitle, text }) => (
    <Card elevation={10} sx={{
        borderRadius: 5,
        transition: '0.3s ease',
        '&:hover': {
            transform: 'translateY(-10px)',
            transition: '0.3s ease',
            cursor: 'alias',
            userSelect: 'none',
        }
    }}>
        <CardMedia
            onContextMenu={(evt) => evt.preventDefault()}
            image={url}
            component="img"
            height="280"
            alt="green iguana"

        />
        <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {name}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
                {subtitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {text}
            </Typography>
        </CardContent>
    </Card>
)

const CounterCard = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date("January 9, 2028 00:00:00").getTime();
        const updateTime = () => {
            const now = Date.now();
            const diff = targetDate - now;
            if (diff < 0) return;
            const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            setTimeRemaining({
                weeks: Math.floor(totalDays / 7),
                // days: totalDays % 7,
                days: totalDays,
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000)
            });
        }
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const counterItem = (value, label) => (
        <Card
            elevation={6}
            sx={{
                textAlign: 'center',
                bgcolor: 'primary.main',
                color: 'white',
                borderRadius: 2,
                px: 1
            }}
        >
            <CardContent>
                <Typography variant="h5" fontWeight="bold">{value}</Typography>
                <Typography variant="caption">{label}</Typography>
            </CardContent>
        </Card>
    );

    return (
        <Box
            sx={{
                mt: { xs: 2, sm: 4 },
                mb: { xs: 2, sm: 6 },
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { xs: 1, sm: 2, md: 3 },
                maxWidth: 800,
                mx: 'auto',
                //  minWidth: { xs: 60, sm: 80, md: 100 },
                textAlign: 'center',
                bgcolor: 'white',
                color: 'white',
                zIndex: 99999
            }}
        >
            {/* {counterItem(timeRemaining.weeks, 'weeks')} */}
            {counterItem(timeRemaining.days, 'days')}
            {counterItem(timeRemaining.hours, 'hours')}
            {counterItem(timeRemaining.minutes, 'minutes')}
            {counterItem(timeRemaining.seconds, 'seconds')}
        </Box>
    )
}

const collaborators = [
    {
        name: 'WATOC',
        src: '/watocLogo.png'
    },
    {
        name: 'Cinvestav',
        src: '/cinvestavlogo.png'
    },
    {
        name: 'UAM',
        src: '/uam.png'
    },
]

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <Box component='main'>
                <HeroSection backgroundImgSrc='/field.png' disableLinearGradient>
                    <Typography color='white' textAlign='center' fontWeight="bold" sx={{
                        fontSize: { xs: '2rem', sm: '3rem', md: '5rem' },
                        letterSpacing: '2px',
                    }}>
                        WATOC 2028
                    </Typography>

                    <Typography color='white' textAlign='center' sx={{
                        fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                        letterSpacing: '2px',
                    }}>
                        Mérida, Mexico — January 9-14, 2028
                    </Typography>

                    <Typography variant="button" textAlign='center' color='white' sx={{
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                        maxWidth: 600,
                        mt: 2
                    }}>
                        14th Triennial Congress of the World Association of
                        Theoretical and Computational Chemists
                    </Typography>
                </HeroSection>

                <Box component='section' justifyContent='center' textAlign='center'>
                    <Typography variant="h4" fontWeight="bold">
                        Countdown to WATOC 2028
                    </Typography>
                    <CounterCard />
                </Box>

                <Box component='section' justifyContent='center' textAlign='center' sx={{
                    backgroundColor: 'rgb(233,236,239)',
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 4, md: 6 },
                }}>
                    <Typography variant="h4" fontWeight="bold" mb={3}>
                        Words of Welcome
                    </Typography>
                    <Stack spacing={5} textAlign='left'>
                        <Grid container spacing={4} justifyContent='center' >
                            <Grid size={{ xs: 10, sm: 10, md: 6 }}>
                                <h4>Welcome</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo.
                                </p>
                                <p>
                                    Ut enim ad minima veniam,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                                    iure reprehenderit qui in ea voluptate velit esse quam nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                    voluptas nulla pariatur?
                                </p>
                            </Grid>
                            <Grid size={{ xs: 10, sm: 10, md: 3 }} >
                                <CongressCard
                                    url="/drmerino.jpg"
                                    name="José Gabriel Merino Hernández"
                                    subtitle="Physical & Theoretical Chemistry"
                                    text="Cinvestav Mérida"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={4} justifyContent='center' alignItems='center' className='w-100' >
                            <Grid size={{ xs: 10, sm: 10, md: 6 }}>
                                <h4>Welcome</h4>
                                <p>
                                    Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et quasi architecto beatae vitae dicta
                                    sunt explicabo.
                                </p>
                                <p>
                                    Ut enim ad minima veniam,
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                                    iure reprehenderit qui in ea voluptate velit esse quam nihil
                                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                    voluptas nulla pariatur?
                                </p>
                            </Grid>
                            <Grid size={{ xs: 10, sm: 10, md: 3 }} >
                                <CongressCard
                                    url="/galano.jpg"
                                    name="Annia Galano Jiménez"
                                    subtitle="Theoretical Chemistry"
                                    text="Universidad Autónoma Metropolitana, Campus Iztapalapa"
                                />
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>

                <Box component='section' sx={{
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 4, md: 6 }
                }}>
                    <Stack alignItems="center" spacing={1} mb={4}>
                        <Typography
                            fontWeight="bold"
                            sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' } }}
                        >
                            Venue
                        </Typography>

                        <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, opacity: 0.8 }}>
                            Centro Internacional de Congresos de Yucatán
                        </Typography>
                    </Stack>
                    <Paper
                        elevation={6}
                        sx={{
                            maxWidth: 900,
                            mx: 'auto',
                            borderRadius: 4,
                            overflow: 'hidden',
                        }}
                    >
                        <Box sx={{ position: 'relative' }}>
                            <Box
                                component="img"
                                src="/centroconvenciones.webp"
                                alt="Centro Internacional de Congresos de Yucatán"
                                sx={{
                                    width: '100%',
                                    height: { xs: 220, md: 360 },
                                    objectFit: 'cover',
                                }}
                            />

                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    background:
                                        'linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,0))',
                                }}
                            />
                        </Box>
                    </Paper>

                    <Grid container spacing={3} mt={3} mx="auto" sx={{
                        width: { xs: '90%', sm: '90%', md: '80%' }
                    }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper sx={{ p: 2 }} elevation={4}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Room />
                                    <Typography>Downtown Mérida</Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper sx={{ p: 2 }} elevation={4}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Flight />
                                    <Typography>20 min from airport</Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <Paper sx={{ p: 2 }} elevation={4}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <Hotel />
                                    <Typography>2,000+ hotel rooms nearby</Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Typography
                        sx={{
                            maxWidth: 700,
                            mx: 'auto',
                            mt: 3,
                            textAlign: 'center',
                            fontSize: { xs: '0.95rem', md: '1.1rem' },
                            opacity: 0.85,
                        }}
                    >
                        A world-class convention center located in Mérida, Mexico, offering
                        modern facilities, excellent connectivity, and a unique cultural
                        environment for international scientific exchange.
                    </Typography>
                    <Box mt={4} display="flex" justifyContent="center">
                        <Button
                            onClick={() => {
                                navigate('/venue')
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                            }}
                            variant="contained"
                            sx={{
                                px: 4,
                                textTransform: 'none',
                                fontSize: '1rem',
                                borderRadius: 10,
                            }}
                        >
                            Explore the venue
                        </Button>
                    </Box>
                </Box>

                <Box component='section' justifyContent='center' textAlign='center' sx={{
                    backgroundColor: 'rgb(233,236,239)',
                    px: { xs: 1, sm: 3, md: 10, lg: 15 },
                    py: { xs: 4, md: 6 },
                }}>
                    <Typography variant="h4" fontWeight="bold" mb={3}>
                        Collaborators
                    </Typography>
                    <Typography color="text.secondary" mb={4}>
                        Organized in collaboration with
                    </Typography>

                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {collaborators.map((collab, index) => (
                            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={index}>
                                <Paper
                                    elevation={6}
                                    sx={{
                                        cursor: 'pointer',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        p: 2,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: 10,
                                        },
                                        height: 150,
                                        width: '100%',
                                        bgcolor: 'white',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={collab.src}
                                        alt={collab.name}
                                        sx={{
                                            maxHeight: '100%',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
