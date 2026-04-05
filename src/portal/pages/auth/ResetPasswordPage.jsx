import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [p1, setP1] = useState('')
  const [p2, setP2] = useState('')

  return (
    <div className="flex min-h-svh flex-col justify-center bg-zinc-100 px-4 py-12 font-sans">
      <div className="mx-auto w-full max-w-md rounded-xl border border-zinc-200 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-zinc-900">Reset password</h1>
        <p className="mt-2 text-sm text-zinc-500">Mock only — nothing is saved except in your browser session.</p>

        <form
          className="mt-8 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            if (p1 !== p2) {
              alert('Passwords do not match')
              return
            }
            navigate('/login')
          }}
        >
          <label className="input-label">
            New password
            <input type="password" value={p1} onChange={(e) => setP1(e.target.value)} className="input-field" required />
          </label>
          <label className="input-label">
            Confirm password
            <input type="password" value={p2} onChange={(e) => setP2(e.target.value)} className="input-field" required />
          </label>
          <button
            type="submit"
            className="w-full rounded-md bg-teal-700 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
          >
            Update password
          </button>
        </form>

        <Link to="/login" className="mt-8 inline-block text-sm text-teal-800 hover:underline">
          ← Back to login
        </Link>
      </div>
    </div>
  )
}
