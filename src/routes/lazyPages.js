import { lazy } from 'react'

/** Route-level code splitting — keeps initial bundle small; pages load on navigation. */
export const AboutPage = lazy(() => import('../pages/AboutPage').then((m) => ({ default: m.AboutPage })))
export const CaseStudiesPage = lazy(() =>
  import('../pages/CaseStudiesPage').then((m) => ({ default: m.CaseStudiesPage })),
)
export const CaseStudyDetailPage = lazy(() =>
  import('../pages/CaseStudyDetailPage').then((m) => ({ default: m.CaseStudyDetailPage })),
)
export const ContactPage = lazy(() => import('../pages/ContactPage').then((m) => ({ default: m.ContactPage })))
export const DemoPage = lazy(() => import('../pages/DemoPage').then((m) => ({ default: m.DemoPage })))
export const HomePage = lazy(() => import('../pages/HomePage').then((m) => ({ default: m.HomePage })))
export const InsightDetailPage = lazy(() =>
  import('../pages/InsightDetailPage').then((m) => ({ default: m.InsightDetailPage })),
)
export const InsightsPage = lazy(() => import('../pages/InsightsPage').then((m) => ({ default: m.InsightsPage })))
export const ProductDetailPage = lazy(() =>
  import('../pages/ProductDetailPage').then((m) => ({ default: m.ProductDetailPage })),
)
export const ProductsPage = lazy(() => import('../pages/ProductsPage').then((m) => ({ default: m.ProductsPage })))
export const ServiceDetailPage = lazy(() =>
  import('../pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })),
)
export const ServicesPage = lazy(() => import('../pages/ServicesPage').then((m) => ({ default: m.ServicesPage })))

export const LoginPage = lazy(() => import('../portal/pages/auth/LoginPage').then((m) => ({ default: m.LoginPage })))
export const ForgotPasswordPage = lazy(() =>
  import('../portal/pages/auth/ForgotPasswordPage').then((m) => ({ default: m.ForgotPasswordPage })),
)
export const ResetPasswordPage = lazy(() =>
  import('../portal/pages/auth/ResetPasswordPage').then((m) => ({ default: m.ResetPasswordPage })),
)
export const DashboardPage = lazy(() =>
  import('../portal/pages/DashboardPage').then((m) => ({ default: m.DashboardPage })),
)
export const LeadCreatePage = lazy(() =>
  import('../portal/pages/leads/LeadCreatePage').then((m) => ({ default: m.LeadCreatePage })),
)
export const LeadDetailPage = lazy(() =>
  import('../portal/pages/leads/LeadDetailPage').then((m) => ({ default: m.LeadDetailPage })),
)
export const LeadListPage = lazy(() =>
  import('../portal/pages/leads/LeadListPage').then((m) => ({ default: m.LeadListPage })),
)

export const AdminRolesPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.AdminRolesPage })),
)
export const AdminUsersPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.AdminUsersPage })),
)
export const AmcListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.AmcListPage })),
)
export const InvoiceListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.InvoiceListPage })),
)
export const PaymentListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.PaymentListPage })),
)
export const ProjectListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.ProjectListPage })),
)
export const QuotationListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.QuotationListPage })),
)
export const SettingsPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.SettingsPage })),
)
export const SupportPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.SupportPage })),
)
export const TaskListPage = lazy(() =>
  import('../portal/pages/ModuleListPages').then((m) => ({ default: m.TaskListPage })),
)

export const PortalLayout = lazy(() =>
  import('../portal/layout/PortalLayout').then((m) => ({ default: m.PortalLayout })),
)
