import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MOCK_USER_BY_ROLE, ROLES, ROLE_LABELS } from '../../constants'
import { useMockAuth } from '../../auth/MockAuthContext'

const ROLE_OPTIONS = [ROLES.ADMIN, ROLES.SALES, ROLES.DEVELOPER, ROLES.CLIENT, ROLES.FINANCE]

export function LoginPage() {
  const { login, isAuthenticated } = useMockAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/app/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState(ROLES.SALES)

  useEffect(() => {
    if (isAuthenticated) navigate(from, { replace: true })
  }, [isAuthenticated, from, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password, role)
    navigate(from, { replace: true })
  }

  const hint = MOCK_USER_BY_ROLE[role]

  return (
    <div className="flex min-h-svh flex-col justify-center bg-zinc-100 px-4 py-12 font-sans">
      <div className="mx-auto w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-900">Sign in</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Mock login — any password works. Pick a role to see different navigation and dashboard widgets.
        </p>

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <label className="input-label">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={hint.email}
              className="input-field"
              autoComplete="username"
            />
          </label>
          <label className="input-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              autoComplete="current-password"
            />
          </label>
          <label className="input-label">
            Role (mock)
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
              {ROLE_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {ROLE_LABELS[r]}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-teal-700 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2 text-center text-sm">
          <Link to="/forgot-password" className="text-teal-800 hover:underline">
            Forgot password
          </Link>
          <Link to="/" className="text-zinc-500 hover:text-zinc-700">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  )
}
