import { Navigate, useLocation } from 'react-router-dom'
import { useMockAuth } from '../auth/MockAuthContext'

export function RequireAuth({ children }) {
  const { isAuthenticated } = useMockAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }

  return children
}
