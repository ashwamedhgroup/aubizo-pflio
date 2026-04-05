import { Link } from 'react-router-dom'
import { useMockAuth } from '../auth/MockAuthContext'
import { canViewFinancialDashboard, ROLES } from '../constants'
import { SimpleTable } from '../components/SimpleTable'
import { usePortalState } from '../state/PortalStateContext'

export function QuotationListPage() {
  const { state } = usePortalState()
  const { user } = useMockAuth()
  const showValue = canViewFinancialDashboard(user.role)

  const columns = [
    { key: 'number', label: 'Quotation #' },
    { key: 'client', label: 'Client' },
    { key: 'projectType', label: 'Project type' },
    ...(showValue ? [{ key: 'value', label: 'Value (₹)', render: (r) => r.value.toLocaleString('en-IN') }] : []),
    { key: 'version', label: 'Ver.' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Date' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Quotations</h1>
        <span className="rounded-md border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-500">
          Create quotation — UI next
        </span>
      </div>
      {!showValue ? (
        <p className="text-sm text-zinc-500">Values hidden for your role (mock rule from §13).</p>
      ) : null}
      <SimpleTable columns={columns} rows={state.quotations} />
    </div>
  )
}

export function ProjectListPage() {
  const { state } = usePortalState()
  const { user } = useMockAuth()
  const rows =
    user.role === ROLES.CLIENT
      ? state.projects.filter((p) => p.clientUserId === user.id)
      : state.projects

  const columns = [
    { key: 'name', label: 'Project' },
    { key: 'client', label: 'Client' },
    { key: 'startDate', label: 'Start' },
    { key: 'deadline', label: 'Deadline' },
    { key: 'status', label: 'Status' },
    { key: 'teamLead', label: 'Team lead' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">
          {user.role === ROLES.CLIENT ? 'My projects' : 'Projects'}
        </h1>
        <span className="rounded-md border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-500">
          Create project — UI next
        </span>
      </div>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  )
}

export function TaskListPage() {
  const { state } = usePortalState()
  const columns = [
    { key: 'title', label: 'Task' },
    { key: 'projectName', label: 'Project' },
    { key: 'assignedTo', label: 'Assigned' },
    { key: 'dueDate', label: 'Due' },
    { key: 'priority', label: 'Priority' },
    { key: 'status', label: 'Status' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Tasks</h1>
        <span className="rounded-md border border-dashed border-zinc-300 px-4 py-2 text-sm text-zinc-500">
          Create task — UI next
        </span>
      </div>
      <SimpleTable columns={columns} rows={state.tasks} />
    </div>
  )
}

export function PaymentListPage() {
  const { state } = usePortalState()
  const { user } = useMockAuth()
  const showAmounts = canViewFinancialDashboard(user.role) || user.role === ROLES.SALES

  const columns = [
    { key: 'client', label: 'Client' },
    { key: 'projectName', label: 'Project' },
    ...(showAmounts
      ? [
          { key: 'total', label: 'Total', render: (r) => `₹${r.total.toLocaleString('en-IN')}` },
          { key: 'received', label: 'Received', render: (r) => `₹${r.received.toLocaleString('en-IN')}` },
          { key: 'pending', label: 'Pending', render: (r) => `₹${r.pending.toLocaleString('en-IN')}` },
        ]
      : []),
    { key: 'dueDate', label: 'Due' },
    { key: 'status', label: 'Status' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Payments</h1>
      {!showAmounts ? <p className="text-sm text-zinc-500">Amount columns hidden for your role (mock §13).</p> : null}
      <SimpleTable columns={columns} rows={state.payments} />
    </div>
  )
}

export function InvoiceListPage() {
  const { state } = usePortalState()
  const rows = state.invoices

  const columns = [
    { key: 'number', label: 'Invoice #' },
    { key: 'client', label: 'Client' },
    { key: 'amount', label: 'Amount', render: (r) => `₹${r.amount.toLocaleString('en-IN')}` },
    { key: 'issueDate', label: 'Issued' },
    { key: 'dueDate', label: 'Due' },
    { key: 'status', label: 'Status' },
    {
      key: 'dl',
      label: '',
      render: () => (
        <span className="text-zinc-400" title="Mock">
          Print
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Invoices</h1>
      <SimpleTable columns={columns} rows={rows} />
    </div>
  )
}

export function AmcListPage() {
  const { state } = usePortalState()
  const columns = [
    { key: 'client', label: 'Client' },
    { key: 'product', label: 'Product' },
    { key: 'startDate', label: 'Start' },
    { key: 'endDate', label: 'End' },
    { key: 'renewalAmount', label: 'Renewal (₹)', render: (r) => r.renewalAmount.toLocaleString('en-IN') },
    { key: 'status', label: 'Status' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">AMC / renewals</h1>
      <SimpleTable columns={columns} rows={state.amc} />
    </div>
  )
}

export function SupportPage() {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Support</h1>
      <p className="text-sm text-zinc-600">Issue form and ticket history can plug in here. Mock submit only.</p>
      <form
        className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
        onSubmit={(e) => {
          e.preventDefault()
          alert('Mock: issue recorded in UI only (no backend).')
        }}
      >
        <label className="input-label">
          Subject
          <input className="input-field" required />
        </label>
        <label className="input-label">
          Message
          <textarea className="input-field" rows={4} required />
        </label>
        <button type="submit" className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white">
          Submit
        </button>
      </form>
      <p className="text-sm text-zinc-500">Contact: add phone / email in company settings later.</p>
    </div>
  )
}

export function AdminUsersPage() {
  const { state } = usePortalState()
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', render: (r) => <span className="capitalize">{r.role}</span> },
    { key: 'active', label: 'Active', render: (r) => (r.active ? 'Yes' : 'No') },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">User management</h1>
      <p className="text-sm text-zinc-500">Read-only seed users — CRUD can extend the mock reducer later.</p>
      <SimpleTable columns={columns} rows={state.users} />
    </div>
  )
}

export function AdminRolesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Roles & permissions</h1>
      <p className="text-sm text-zinc-600">
        Map modules (Leads, Quotations, …) to roles. For now this is static copy matching your spec.
      </p>
      <ul className="list-inside list-disc space-y-2 rounded-xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
        <li>Admin / Finance — revenue, collections, sensitive commercial fields</li>
        <li>Sales — leads, quotations, projects; quotation values optional per policy</li>
        <li>Developer — assigned projects and tasks</li>
        <li>Client — own projects, invoices, payments, AMC, support</li>
      </ul>
    </div>
  )
}

export function SettingsPage() {
  const { resetStore } = usePortalState()
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Settings</h1>
      <p className="text-sm text-zinc-600">
        Company profile, email, branding, GST / invoice, notifications — forms can be added here as mock-only fields.
      </p>
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
        <h2 className="text-sm font-semibold text-amber-900">Mock data tools</h2>
        <p className="mt-2 text-sm text-amber-800">
          Reset in-memory + localStorage seed to defaults (leads you added will be cleared).
        </p>
        <button
          type="button"
          className="mt-4 rounded-md border border-amber-300 bg-white px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-100"
          onClick={() => {
            if (confirm('Reset all mock portal data to defaults?')) resetStore()
          }}
        >
          Reset mock data
        </button>
      </div>
      <Link to="/app/dashboard" className="text-sm text-teal-800 hover:underline">
        ← Dashboard
      </Link>
    </div>
  )
}
