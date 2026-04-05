import { ROLES } from '../constants'

export function getSidebarNav(role) {
  if (role === ROLES.CLIENT) {
    return [
      { to: '/app/dashboard', label: 'Dashboard' },
      { to: '/app/projects', label: 'My projects' },
      { to: '/app/invoices', label: 'My invoices' },
      { to: '/app/payments', label: 'Payments' },
      { to: '/app/amc', label: 'AMC / renewals' },
      { to: '/app/support', label: 'Support' },
    ]
  }

  if (role === ROLES.DEVELOPER) {
    return [
      { to: '/app/dashboard', label: 'Dashboard' },
      { to: '/app/projects', label: 'Projects' },
      { to: '/app/tasks', label: 'Tasks' },
    ]
  }

  const core = [
    { to: '/app/dashboard', label: 'Dashboard' },
    { to: '/app/leads', label: 'Leads' },
    { to: '/app/quotations', label: 'Quotations' },
    { to: '/app/projects', label: 'Projects' },
    { to: '/app/tasks', label: 'Tasks' },
    { to: '/app/payments', label: 'Payments' },
    { to: '/app/invoices', label: 'Invoices' },
    { to: '/app/amc', label: 'AMC' },
  ]

  if (role === ROLES.SALES) {
    return core
  }

  if (role === ROLES.ADMIN || role === ROLES.FINANCE) {
    return [
      ...core,
      { to: '/app/admin/users', label: 'Users', section: 'Admin' },
      { to: '/app/admin/roles', label: 'Roles & permissions' },
      { to: '/app/settings', label: 'Settings' },
    ]
  }

  return core
}
