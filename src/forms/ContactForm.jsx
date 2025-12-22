import { Button, TextField, Grid, MenuItem, Typography, Stack, Divider, Box, InputAdornment, FormLabel, Alert, Snackbar, Fade } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { ErrorOutline, MailOutline, Send } from '@mui/icons-material'
import CustomTextField from '../components/CustomTextField'
import { useAPI } from '../contexts/APIContext'
import { REGEX_EMAIL, REGEX_NAME } from '../utils/formRegex'

export default function ContactForm({ action = '#' }) {
    const { control, handleSubmit, reset, formState: { errors, isSubmitSuccessful, isSubmitting } } = useForm()
    const api = useAPI()

    const validateOption = (value) => (value !== -1 || 'Required *')

    const onSubmit = async (data) => {
        const sleep = (ms) =>
            new Promise(resolve => setTimeout(resolve, ms));

        await sleep(1000)

        const response = await api.post('/contact', data)
        if (response.status === 201) {
            console.log('Contacto exitoso!!')
            console.log(response);
            window.scroll({
                top: 420,
                behavior: 'smooth'
            })
            reset()
        } else {
            throw new Error('Bad response!')
        }
    }

    const contactType = [
        {
            id: 0,
            label: 'Posters'
        },
        {
            id: 1,
            label: 'Talks'
        },
        {
            id: 2,
            label: 'Invitation letter'
        },
        {
            id: 3,
            label: 'Payment'
        },
        {
            id: 4,
            label: 'Other'
        },
    ]

    return (
        <form action={action} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <Box textAlign="center" mb={6} >
                    <Typography
                        variant="overline"
                        color="primary"
                        fontWeight="bold"
                        sx={{ fontSize: '1rem', letterSpacing: 2 }}
                    >
                        Contact us
                    </Typography>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            mt: 1,
                            mb: 2,
                            fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                    >
                        Send us a message
                    </Typography>
                    <Box
                        sx={{
                            width: 100,
                            height: 4,
                            bgcolor: 'primary.main',
                            mx: 'auto',
                            borderRadius: 2,
                        }}
                    />

                </Box>

                <Divider />

                <Fade
                    in={isSubmitSuccessful}
                    timeout={800}
                    mountOnEnter
                    unmountOnExit
                >
                    <Alert
                        severity='success'
                        variant='filled'
                    >
                        Se envió exitosamente el mensaje, te contactaremos chingada puta
                    </Alert>
                </Fade>

                <Grid container spacing={2} display={'flex'} justifyContent={'space-between'}>
                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }}>
                        <FormLabel htmlFor='firstName'>
                            First name *
                        </FormLabel>
                        <Controller
                            name='firstName'
                            control={control}
                            defaultValue={''}
                            rules={{
                                required: 'First name is required',
                                maxLength: { value: 64, message: 'Max length is 64 characters' },
                                pattern: { value: REGEX_NAME, message: 'Invalid name' }
                            }}
                            render={({ field }) => (
                                <CustomTextField {...field}
                                    id='firstName'
                                    maxLenght={64}
                                    placeholder={'First name'}
                                    error={!!errors.firstName}
                                    helperText={errors?.firstName?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={{ lg: 6, md: 12, sm: 12, xs: 12 }} >
                        <FormLabel htmlFor='lastName'>
                            Last name *
                        </FormLabel>
                        <Controller
                            name='lastName'
                            control={control}
                            defaultValue={''}
                            rules={{
                                required: 'Last name is required',
                                maxLength: { value: 64, message: 'Max length is 64 characters' },
                                pattern: { value: REGEX_NAME, message: 'Invalid name' }
                            }}
                            render={({ field }) => (
                                <CustomTextField {...field}
                                    id='lastName'
                                    maxLenght={64}
                                    placeholder={'Last name'}
                                    error={!!errors.lastName}
                                    helperText={errors?.lastName?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={12} >
                        <FormLabel htmlFor='email'>
                            Email *
                        </FormLabel>
                        <Controller
                            name='email'
                            control={control}
                            defaultValue={''}
                            rules={{
                                required: 'Email is required',
                                maxLength: { value: 128, message: 'Max length is 128 characters' },
                                pattern: { value: REGEX_EMAIL, message: 'Invalid email' }
                            }}
                            render={({ field }) => (
                                <CustomTextField {...field}
                                    id='email'
                                    hideLengthLabel
                                    maxLenght={128}
                                    placeholder={'Email'}
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                    slotProps={{
                                        input: {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <MailOutline />
                                                </InputAdornment>
                                            )
                                        }
                                    }}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={12} >
                        <FormLabel htmlFor='subject'>
                            Subject *
                        </FormLabel>
                        <Controller
                            name="subject"
                            control={control}
                            defaultValue={-1}
                            rules={{
                                required: 'Este campo es obligatorio',
                                validate: validateOption
                            }}
                            render={({ field }) => (
                                <TextField  {...field}
                                    id='subject'
                                    fullWidth
                                    select
                                    defaultValue={-1}
                                    error={!!errors.subject}
                                    helperText={
                                        <Typography variant="caption">
                                            {!!errors.subject && <>
                                                <ErrorOutline fontSize='small' /> {errors.subject?.message}
                                            </>}
                                        </Typography>
                                    }
                                >
                                    <MenuItem value={-1} disabled>Choose an option</MenuItem>
                                    {contactType.map(item => (
                                        <MenuItem key={item.id} value={item.id}>{item.label}</MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                    </Grid>
                    <Grid size={12} >
                        <FormLabel htmlFor='description'>
                            Description *
                        </FormLabel>
                        <Controller
                            name='description'
                            control={control}
                            defaultValue={''}
                            rules={{
                                required: 'Description is required',
                                maxLength: { value: 555, message: 'Max length is 555 characters' },
                            }}
                            render={({ field }) => (
                                <CustomTextField {...field}
                                    id='description'
                                    maxLenght={555}
                                    placeholder={'Descripción'}
                                    error={!!errors.description}
                                    helperText={errors?.description?.message}
                                    multiline
                                    minRows={4}
                                />
                            )}
                        />
                    </Grid>
                    <Grid size={12} display='flex'>
                        <Typography variant='caption' flex={1} color='grey'>
                            By submitting this you agree with our privacy policy
                        </Typography>
                        <Button type='submit' variant='contained' loading={isSubmitting} disabled={isSubmitSuccessful} size='large' endIcon={<Send />} >Submit</Button>
                    </Grid>
                </Grid>
            </Stack>
        </form>
    )
}
