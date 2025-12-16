import { Box, FormControl, FormControlLabel, Grow, InputAdornment, InputLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { MailOutline } from '@mui/icons-material'
import StepTemplate from './StepTemplate'
import RenderInput from '../inputs/RenderInput'

const Category = ({ control }) => {
    return (
        <FormControl component='fieldset'>
            <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <RadioGroup {...field} >
                        <FormControlLabel
                            value='puta'
                            control={<Radio />}
                            label={
                                <Paper elevation={3}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                        <img src="/uam.png" width={300} height={100} />
                                        <Typography>Chingada puta</Typography>
                                    </Box>
                                </Paper>
                            }
                        />
                    </RadioGroup>
                )}
            />
            <Controller
                name="category"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <RadioGroup {...field} >
                        <FormControlLabel
                            value='puta2'
                            control={<Radio />}
                            label={
                                <Paper elevation={3}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                                        <img src="/uam.png" width={300} height={100} />
                                        <Typography>Chingada puta2</Typography>
                                    </Box>
                                </Paper>
                            }
                        />
                    </RadioGroup>
                )}
            />
        </FormControl>
    )
}

export default function SecondStep({ data = {}, stepName = '_', onNext = null, onBack = null }) {
    const { handleSubmit, formState: { errors }, control, getValues } = useForm()

    const onValidData = (data) => {
        onNext?.(data, stepName)
    }

    const onCurrentData = () => {
        console.log('Get values');
        console.log(getValues());
        onBack?.(getValues(), stepName)
    }

    return (
        <StepTemplate onBack={onCurrentData} onSubmit={handleSubmit(onValidData)}>
            <Typography variant='h5'>
                Category
            </Typography>

            <Category control={control} />
        </StepTemplate>
    )
}
