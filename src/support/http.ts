import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

export const http: AxiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL
})

http.interceptors.request.use(
  (config) => {
    const token = 'token'

    if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error?.response?.data)
  }
)
