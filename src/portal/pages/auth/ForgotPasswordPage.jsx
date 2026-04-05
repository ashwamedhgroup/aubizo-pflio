import { useState } from 'react'
import { Link } from 'react-router-dom'

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  return (
    <div className="flex min-h-svh flex-col justify-center bg-zinc-100 px-4 py-12 font-sans">
      <div className="mx-auto w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-900">Forgot password</h1>
        <p className="mt-2 text-sm text-zinc-500">Mock flow — no email is sent.</p>

        {sent ? (
          <p className="mt-6 text-sm text-zinc-700">
            If this were live, we’d email a reset link to <strong>{email || 'that address'}</strong>. For now, use{' '}
            <Link to="/reset-password" className="text-teal-800 hover:underline">
              reset password
            </Link>{' '}
            directly.
          </p>
        ) : (
          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <label className="input-label">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-md bg-teal-700 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
            >
              Reset password
            </button>
          </form>
        )}

        <Link to="/login" className="mt-8 inline-block text-sm text-teal-800 hover:underline">
          ← Back to login
        </Link>
      </div>
    </div>
  )
}
