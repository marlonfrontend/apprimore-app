import { http } from '@/support'

export const getInvoice = (): Promise<any> => {
  return http.get('/financeiro/faturas')
}

export const createReturn = (): Promise<any> => {
  return http.get('/financeiro/retorno')
}
