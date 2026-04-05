/** Mock portal roles — align with private_website.md dashboards */
export const ROLES = {
  ADMIN: 'admin',
  SALES: 'sales',
  DEVELOPER: 'developer',
  CLIENT: 'client',
  FINANCE: 'finance',
}

export const ROLE_LABELS = {
  [ROLES.ADMIN]: 'Admin',
  [ROLES.SALES]: 'Sales',
  [ROLES.DEVELOPER]: 'Developer',
  [ROLES.CLIENT]: 'Client',
  [ROLES.FINANCE]: 'Finance',
}

/** Demo user profile per role (ids match seed users / client-demo) */
export const MOCK_USER_BY_ROLE = {
  [ROLES.ADMIN]: { id: 'u1', name: 'Admin User', email: 'admin@aubizo.local' },
  [ROLES.SALES]: { id: 'u2', name: 'Priya S', email: 'sales@aubizo.local' },
  [ROLES.DEVELOPER]: { id: 'u3', name: 'Dev team A', email: 'dev@aubizo.local' },
  [ROLES.CLIENT]: { id: 'client-demo', name: 'Client Demo', email: 'client@client.local' },
  [ROLES.FINANCE]: { id: 'u1', name: 'Finance', email: 'finance@aubizo.local' },
}

/** Who can see revenue / company-wide money widgets (§13) */
export function canViewFinancialDashboard(role) {
  return role === ROLES.ADMIN || role === ROLES.FINANCE
}

export function canManageUsers(role) {
  return role === ROLES.ADMIN
}
