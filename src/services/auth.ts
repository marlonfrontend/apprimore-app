import { http } from '@/support'

export const signIn = (): Promise<any> => {
  return http.post('/auth')
}
