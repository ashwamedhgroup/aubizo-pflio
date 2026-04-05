import { Link } from 'react-router-dom'
import { useMockAuth } from '../auth/MockAuthContext'
import { ROLES, canViewFinancialDashboard } from '../constants'
import { usePortalState } from '../state/PortalStateContext'

function StatCard({ label, value, hint }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-zinc-900">{value}</p>
      {hint ? <p className="mt-1 text-xs text-zinc-500">{hint}</p> : null}
    </div>
  )
}

export function DashboardPage() {
  const { user } = useMockAuth()
  const { state } = usePortalState()
  const { leads, quotations, projects, tasks, payments, invoices, amc } = state
  const role = user.role

  const myLeads = role === ROLES.SALES ? leads.filter((l) => l.assignedTo === 'Priya S') : leads
  const myTasks = role === ROLES.DEVELOPER ? tasks.filter((t) => t.assignedTo === 'Dev team A') : tasks
  const clientProjects =
    role === ROLES.CLIENT ? projects.filter((p) => p.clientUserId === user.id) : projects

  const pendingPay = payments.reduce((s, p) => s + (p.pending || 0), 0)
  const totalReceived = payments.reduce((s, p) => s + (p.received || 0), 0)

  const showMoney = canViewFinancialDashboard(role)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-500">
          Role: <span className="font-medium capitalize text-zinc-700">{role}</span> — counts come from in-memory mock
          data (persisted in localStorage).
        </p>
      </div>

      {role === ROLES.CLIENT ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Active projects" value={clientProjects.length} />
          <StatCard label="Open invoices" value={invoices.filter((i) => i.status !== 'Paid').length} />
          <StatCard label="AMC records" value={amc.length} hint="Renewal dates in AMC section" />
        </div>
      ) : null}

      {role === ROLES.DEVELOPER ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard label="Assigned projects" value={projects.length} />
          <StatCard label="My tasks" value={myTasks.length} />
          <StatCard label="Tasks in progress" value={tasks.filter((t) => t.status === 'In progress').length} />
        </div>
      ) : null}

      {role === ROLES.SALES ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="My leads" value={myLeads.length} />
          <StatCard label="Follow-ups (sample)" value={myLeads.filter((l) => l.nextFollowUp).length} />
          <StatCard label="Quotations" value={quotations.length} />
          <StatCard label="Active projects" value={projects.filter((p) => p.status === 'Active').length} />
        </div>
      ) : null}

      {(role === ROLES.ADMIN || role === ROLES.FINANCE) && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Leads" value={leads.length} />
          <StatCard label="Quotations" value={quotations.length} />
          <StatCard label="Active projects" value={projects.filter((p) => p.status === 'Active').length} />
          <StatCard label="Pending payments (₹)" value={pendingPay.toLocaleString('en-IN')} hint="Sum of pending" />
          {showMoney ? (
            <>
              <StatCard label="Collected (sample ₹)" value={totalReceived.toLocaleString('en-IN')} />
              <StatCard label="AMC due soon" value={amc.filter((a) => a.status?.includes('Expiring')).length} />
            </>
          ) : null}
        </div>
      )}

      {role === ROLES.SALES || role === ROLES.ADMIN || role === ROLES.FINANCE ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-6">
          <h2 className="text-sm font-semibold text-zinc-900">Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/app/leads/new"
              className="rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
            >
              Add lead
            </Link>
            <Link
              to="/app/quotations"
              className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              View quotations
            </Link>
            <Link
              to="/app/projects"
              className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Projects
            </Link>
          </div>
        </div>
      ) : null}

      {role === ROLES.CLIENT ? (
        <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-6">
          <h2 className="text-sm font-semibold text-zinc-900">Support</h2>
          <p className="mt-2 text-sm text-zinc-600">Raise an issue or reach your account manager.</p>
          <Link to="/app/support" className="mt-4 inline-block text-sm font-medium text-teal-800 hover:underline">
            Open support →
          </Link>
        </div>
      ) : null}
    </div>
  )
}
