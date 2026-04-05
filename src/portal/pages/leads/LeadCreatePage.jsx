import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePortalState } from '../../state/PortalStateContext'

const empty = {
  name: '',
  company: '',
  phone: '',
  email: '',
  source: 'Website',
  requirement: '',
  status: 'New',
  assignedTo: 'Priya S',
  nextFollowUp: '',
  notes: '',
}

export function LeadCreatePage() {
  const { dispatch } = usePortalState()
  const navigate = useNavigate()
  const [form, setForm] = useState(empty)

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Create lead</h1>
      <form
        className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault()
          const notes = form.notes.trim() ? [{ at: new Date().toISOString().slice(0, 10), text: form.notes.trim() }] : []
          dispatch({
            type: 'ADD_LEAD',
            payload: {
              name: form.name,
              company: form.company,
              phone: form.phone,
              email: form.email,
              source: form.source,
              requirement: form.requirement,
              status: form.status,
              assignedTo: form.assignedTo,
              nextFollowUp: form.nextFollowUp || null,
              notes,
              followUps: [],
            },
          })
          navigate('/app/leads')
        }}
      >
        {[
          ['name', 'Name', 'text'],
          ['company', 'Company', 'text'],
          ['phone', 'Phone', 'tel'],
          ['email', 'Email', 'email'],
          ['source', 'Source', 'text'],
          ['requirement', 'Requirement', 'text'],
          ['status', 'Status', 'text'],
          ['assignedTo', 'Assigned to', 'text'],
          ['nextFollowUp', 'Next follow-up', 'date'],
        ].map(([key, label, type]) => (
          <label key={key} className="input-label">
            {label}
            <input type={type} value={form[key]} onChange={set(key)} className="input-field" required={key === 'name'} />
          </label>
        ))}
        <label className="input-label">
          Notes
          <textarea value={form.notes} onChange={set('notes')} className="input-field" rows={3} />
        </label>
        <div className="flex gap-3">
          <button type="submit" className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800">
            Save lead
          </button>
          <button
            type="button"
            className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
