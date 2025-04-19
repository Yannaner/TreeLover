import { createContext, useContext, useState, ReactNode } from 'react'
import { User } from './types'
import { mockUsers } from './mockData'

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
  register: (email: string, password: string, displayName: string) => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {}
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, _password: string) => {
    const found = mockUsers.find(u => u.email === email)
    setUser(found || null)
  }

  const logout = () => setUser(null)

  const register = (email: string, _password: string, displayName: string) => {
    const newUser = { uid: Date.now().toString(), email, displayName }
    setUser(newUser)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
