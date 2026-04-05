import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { SimpleTable } from '../../components/SimpleTable'
import { usePortalState } from '../../state/PortalStateContext'

export function LeadListPage() {
  const { state } = usePortalState()
  const [status, setStatus] = useState('')
  const [source, setSource] = useState('')
  const [assigned, setAssigned] = useState('')
  const [q, setQ] = useState('')

  const rows = useMemo(() => {
    return state.leads.filter((l) => {
      if (status && l.status !== status) return false
      if (source && l.source !== source) return false
      if (assigned && l.assignedTo !== assigned) return false
      if (q) {
        const n = `${l.name} ${l.company} ${l.phone}`.toLowerCase()
        if (!n.includes(q.toLowerCase())) return false
      }
      return true
    })
  }, [state.leads, status, source, assigned, q])

  const statuses = [...new Set(state.leads.map((l) => l.status))]
  const sources = [...new Set(state.leads.map((l) => l.source))]
  const assignees = [...new Set(state.leads.map((l) => l.assignedTo))]

  const columns = [
    { key: 'name', label: 'Lead' },
    { key: 'company', label: 'Company' },
    { key: 'phone', label: 'Phone' },
    { key: 'source', label: 'Source' },
    { key: 'status', label: 'Status' },
    { key: 'assignedTo', label: 'Assigned to' },
    { key: 'nextFollowUp', label: 'Next follow-up' },
    {
      key: 'actions',
      label: '',
      render: (row) => (
        <Link to={`/app/leads/${row.id}`} className="text-teal-800 hover:underline">
          View
        </Link>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Leads</h1>
        <Link
          to="/app/leads/new"
          className="inline-flex justify-center rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-800"
        >
          Add lead
        </Link>
      </div>

      <div className="flex flex-wrap gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
        <input
          type="search"
          placeholder="Search name, company, phone…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="min-w-[200px] flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select value={source} onChange={(e) => setSource(e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All sources</option>
          {sources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <select value={assigned} onChange={(e) => setAssigned(e.target.value)} className="rounded-md border border-zinc-300 px-3 py-2 text-sm">
          <option value="">All assignees</option>
          {assignees.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <SimpleTable columns={columns} rows={rows} />
    </div>
  )
}
