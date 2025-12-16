import './App.css'
import Home from './pages/Home'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import Contact from './pages/Contact'
import Login from './pages/Login'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './pages/Register'
import Test from './pages/Test'
import VenuePage from './pages/VenuePage'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const globalTheme = createTheme({
	components: {
		MuiTextField: {
			styleOverrides: {
				root: {
					'& fieldset': {
						borderRadius: 20,
					},
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					scrollbarColor: '#b6b6b6ff transparent', // Firefox
					scrollbarWidth: 'thin',

					'&::-webkit-scrollbar': {
						width: 8,
						height: 8,
					},
					'&::-webkit-scrollbar-track': {
						background: 'transparent',
					},
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: '#6b6b6b',
						borderRadius: 8,
						border: '2px solid transparent',
						backgroundClip: 'content-box',
					},
					'&::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#555',
					},
				},
			},
		},
	},
})

function App() {
	return (
		<>
			<ThemeProvider theme={globalTheme}>
				<CssBaseline />
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='*' element={<Home />} />
					<Route path='/venue' element={<VenuePage />} />
					<Route path='/contact' element={<Contact />} />


					<Route path='/test' element={<Test />} />
					<Route path='/login' element={<>
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<Login />
						</ThemeProvider>
					</>} />
					<Route path='/register' element={<>
						<ThemeProvider theme={darkTheme}>
							<CssBaseline />
							<Register />
						</ThemeProvider>
					</>} />
				</Routes>
			</ThemeProvider>

		</>
	)
}

export default App
