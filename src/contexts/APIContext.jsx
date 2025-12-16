import axios from 'axios'
import React, { createContext, useContext } from 'react'

const BASE_URL = ''

const APIContext = createContext()

export const useApi = () => useContext(APIContext)

export const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
})

AxiosInstance.interceptors.request.use(
    config => {
        
    },
    error => {

    }
)

AxiosInstance.interceptors.response.use(
    config => {

    },
    error => {

    }
)

export default function APIContextProvider({ children }) {
    return (
        <APIContext.Provider>
            {children}
        </APIContext.Provider>
    )
}
