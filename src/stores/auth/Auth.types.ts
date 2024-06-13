export type AuthState = {
  token: string | null
  setToken: (newToken: string) => void
}
