import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { MOCK_USER_BY_ROLE, ROLES } from '../constants'

const AUTH_KEY = 'aubizo-mock-auth-v1'

const MockAuthContext = createContext(null)

function readSession() {
  try {
    const raw = sessionStorage.getItem(AUTH_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

/**
 * Mock auth: any password works. Role chooses which dashboard/nav you see.
 * Replace with real API + JWT when backend exists.
 */
export function MockAuthProvider({ children }) {
  const [user, setUser] = useState(() => readSession())

  const login = useCallback((email, _password, role) => {
    const r = role || ROLES.SALES
    const base = MOCK_USER_BY_ROLE[r] || MOCK_USER_BY_ROLE[ROLES.SALES]
    const session = {
      id: base.id,
      name: base.name,
      email: (email && email.trim()) || base.email,
      role: r,
    }
    sessionStorage.setItem(AUTH_KEY, JSON.stringify(session))
    setUser(session)
  }, [])

  const logout = useCallback(() => {
    sessionStorage.removeItem(AUTH_KEY)
    setUser(null)
  }, [])

  const value = useMemo(() => ({ user, login, logout, isAuthenticated: !!user }), [user, login, logout])

  return <MockAuthContext.Provider value={value}>{children}</MockAuthContext.Provider>
}

export function useMockAuth() {
  const ctx = useContext(MockAuthContext)
  if (!ctx) throw new Error('useMockAuth outside MockAuthProvider')
  return ctx
}
