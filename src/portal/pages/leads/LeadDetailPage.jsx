import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { usePortalState } from '../../state/PortalStateContext'

export function LeadDetailPage() {
  const { id } = useParams()
  const { state, dispatch } = usePortalState()
  const [note, setNote] = useState('')
  const [followUp, setFollowUp] = useState('')
  const [status, setStatus] = useState('')

  const lead = useMemo(() => state.leads.find((l) => l.id === id), [state.leads, id])
  const linkedQt = useMemo(() => state.quotations.filter((q) => q.leadId === id), [state.quotations, id])

  if (!lead) {
    return (
      <div>
        <p className="text-zinc-600">Lead not found.</p>
        <Link to="/app/leads" className="mt-4 inline-block text-teal-800 hover:underline">
          ← Back to leads
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">{lead.name}</h1>
          <p className="text-sm text-zinc-500">{lead.company}</p>
        </div>
        <Link to="/app/leads" className="text-sm text-teal-800 hover:underline">
          ← All leads
        </Link>
      </div>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-900">Lead info</h2>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-zinc-500">Phone</dt>
            <dd className="font-medium text-zinc-800">{lead.phone}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Email</dt>
            <dd className="font-medium text-zinc-800">{lead.email}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Source</dt>
            <dd className="font-medium text-zinc-800">{lead.source}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Assigned to</dt>
            <dd className="font-medium text-zinc-800">{lead.assignedTo}</dd>
          </div>
          <div>
            <dt className="text-zinc-500">Next follow-up</dt>
            <dd className="font-medium text-zinc-800">{lead.nextFollowUp || '—'}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-zinc-500">Requirement</dt>
            <dd className="text-zinc-800">{lead.requirement}</dd>
          </div>
        </dl>

        <div className="mt-6 border-t border-zinc-100 pt-6">
          <label className="text-sm font-medium text-zinc-800">Change status</label>
          <div className="mt-2 flex flex-wrap gap-2">
            <select
              value={status || lead.status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
            >
              {['New', 'Qualified', 'Proposal', 'Won', 'Lost'].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <button
              type="button"
              className="rounded-md bg-zinc-800 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-900"
              onClick={() => {
                dispatch({ type: 'UPDATE_LEAD', payload: { id: lead.id, status: status || lead.status } })
                setStatus('')
              }}
            >
              Save status
            </button>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-900">Linked quotations</h2>
        {linkedQt.length === 0 ? (
          <p className="mt-2 text-sm text-zinc-500">None linked in mock data.</p>
        ) : (
          <ul className="mt-3 space-y-2 text-sm">
            {linkedQt.map((q) => (
              <li key={q.id}>
                <Link to="/app/quotations" className="text-teal-800 hover:underline">
                  {q.number}
                </Link>{' '}
                — {q.status} — ₹{q.value.toLocaleString('en-IN')}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-900">Notes history</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {lead.notes?.length ? (
            lead.notes.map((n, i) => (
              <li key={i} className="border-l-2 border-teal-200 pl-3">
                <span className="text-xs text-zinc-500">{n.at}</span>
                <p className="text-zinc-700">{n.text}</p>
              </li>
            ))
          ) : (
            <li className="text-zinc-500">No notes yet.</li>
          )}
        </ul>
        <div className="mt-4 flex gap-2">
          <input
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Add note"
            className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            className="rounded-md bg-teal-700 px-3 py-2 text-sm font-medium text-white hover:bg-teal-800"
            onClick={() => {
              if (!note.trim()) return
              dispatch({ type: 'ADD_LEAD_NOTE', payload: { leadId: lead.id, text: note.trim() } })
              setNote('')
            }}
          >
            Add
          </button>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-900">Follow-up history</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {lead.followUps?.length ? (
            lead.followUps.map((n, i) => (
              <li key={i} className="border-l-2 border-zinc-200 pl-3">
                <span className="text-xs text-zinc-500">{n.at}</span>
                <p className="text-zinc-700">{n.text}</p>
              </li>
            ))
          ) : (
            <li className="text-zinc-500">No follow-ups logged.</li>
          )}
        </ul>
        <div className="mt-4 flex gap-2">
          <input
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
            placeholder="Log follow-up"
            className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            className="rounded-md bg-teal-700 px-3 py-2 text-sm font-medium text-white hover:bg-teal-800"
            onClick={() => {
              if (!followUp.trim()) return
              dispatch({ type: 'ADD_FOLLOWUP', payload: { leadId: lead.id, text: followUp.trim() } })
              setFollowUp('')
            }}
          >
            Log
          </button>
        </div>
      </section>
    </div>
  )
}
