import { Box, Container, Fade, Grow, Paper, Slide, Toolbar, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import ContactForm from '../../forms/ContactForm'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { GenericHeroContent } from '../../components/GenericHeroContent'
import GenericCTASection from '../../components/GenericCTASection'
import TitleSection from './sections/TitleSection'
import { HeroSection } from '../../components/HeroSection'

export default function Contact() {
    return (
        <>
            <NavBar />
            <Box component='main'>
                <HeroSection
                    enableParticles
                >
                    <GenericHeroContent />
                </HeroSection>

                <Box
                    component="section"
                    sx={{
                        py: { xs: 6, md: 8 },
                        px: { xs: 2, sm: 3 },
                        bgcolor: 'grey.50',
                        borderBottom: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center'}}>
                        <Grow in={true} timeout={700}>
                            <Paper elevation={5} sx={{
                                borderTop: 12,
                                borderColor: '#6a45ffff',
                                padding: 4,
                                zIndex: 1000,
                                maxWidth: 700,
                                minWidth: 380,
                            }}>
                                <ContactForm />
                            </Paper>
                        </Grow>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    )
}
