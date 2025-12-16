import { Box, Button, Grow, InputAdornment, InputLabel, Stack, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import CustomTextField from '../../CustomTextField'
import { REGEX_EMAIL, REGEX_NAME } from '../../../utils/formRegex'
import { ContactEmergency, DriveFileRenameOutline, MailOutline } from '@mui/icons-material'
import StepTemplate from './StepTemplate'
import RenderInput from '../inputs/RenderInput'
import CountrySelect from '../inputs/CountrySelect'

export default function BasicInfoStep({ data = {}, stepName = '_', onNext = null }) {
    const { handleSubmit, formState: { errors }, control } = useForm()

    const onValidData = (data) => {
        onNext?.(data, stepName)
    }

    return (
        <StepTemplate onSubmit={handleSubmit(onValidData)} stepActions={(
            <>
                <Button type='submit' onClick={handleSubmit(onValidData)} variant='contained' sx={{ marginLeft: 'auto' }}>
                    Next
                </Button>
            </>
        )}>
            <Typography variant='h5'>
                Personal data
            </Typography>
            <RenderInput
                name='firstName'
                control={control}
                rules={{
                    // required: 'Please provide your first name',
                    // maxLength: {
                    //     value: 100,
                    //     message: 'No seas puta',
                    // },
                    // pattern: {
                    //     value: REGEX_NAME,
                    //     message: 'Please provide a valid first name',
                    // },
                }}
                defaultValue={data[stepName]?.firstName || ''}
                id='firstNameInput'
                placeholder='First name'
                error={!!errors?.firstName}
                helperText={errors?.firstName?.message}
                InputComponent={CustomTextField}
                maxLenght={100}
                inputAdornment={(
                    <InputAdornment position="start">
                        <DriveFileRenameOutline />
                    </InputAdornment>
                )}
            />
            <RenderInput
                name='lastName'
                label='Last name'
                control={control}
                rules={{
                    // required: 'Please provide your first name',
                    // maxLength: {
                    //     value: 100,
                    //     message: 'No seas puta',
                    // },
                    // pattern: {
                    //     value: REGEX_NAME,
                    //     message: 'Please provide a valid first name',
                    // },
                }}
                id='lastName'
                placeholder='Last name'
                defaultValue={data[stepName]?.lastName || ''}
                error={!!errors?.lastName}
                helperText={errors?.lastName?.message}
                InputComponent={CustomTextField}
                maxLenght={100}
                inputAdornment={(
                    <InputAdornment position="start">
                        <DriveFileRenameOutline />
                    </InputAdornment>
                )}
            />
            <RenderInput
                name='email'
                label='Email'
                control={control}
                rules={{
                    // required: 'Please provide an email',
                    // pattern: {
                    //     value: REGEX_EMAIL,
                    //     message: 'Please provide a valid email',
                    // },
                }}
                id='email'
                placeholder='example@domain.com'
                defaultValue={data[stepName]?.email || ''}
                error={!!errors?.email}
                helperText={errors?.email?.message}
                inputAdornment={(
                    <InputAdornment position="start">
                        <MailOutline />
                    </InputAdornment>
                )}
            />

            <CountrySelect
                id='country'
                name='country'
                label='Country'
                control={control}
                defaultValue={data[stepName]?.country || ''}
                placeholder='Select your country'
            />

            
        </StepTemplate>
    )
}
