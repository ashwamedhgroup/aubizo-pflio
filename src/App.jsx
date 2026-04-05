import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PublicLayout } from './layouts/PublicLayout'
import { MockAuthProvider } from './portal/auth/MockAuthContext'
import { RequireAuth } from './portal/components/RequireAuth'
import { PortalStateProvider } from './portal/state/PortalStateContext'
import {
  AboutPage,
  AdminRolesPage,
  AdminUsersPage,
  AmcListPage,
  CaseStudiesPage,
  CaseStudyDetailPage,
  ContactPage,
  DashboardPage,
  DemoPage,
  ForgotPasswordPage,
  HomePage,
  InsightDetailPage,
  InsightsPage,
  InvoiceListPage,
  LeadCreatePage,
  LeadDetailPage,
  LeadListPage,
  LoginPage,
  PaymentListPage,
  PortalLayout,
  ProductDetailPage,
  ProductsPage,
  ProjectListPage,
  QuotationListPage,
  ResetPasswordPage,
  ServiceDetailPage,
  ServicesPage,
  SettingsPage,
  SupportPage,
  TaskListPage,
} from './routes/lazyPages'
import { RouteFallback } from './routes/RouteFallback'

function PortalShell() {
  return (
    <RequireAuth>
      <PortalStateProvider>
        <Suspense fallback={<RouteFallback />}>
          <PortalLayout />
        </Suspense>
      </PortalStateProvider>
    </RequireAuth>
  )
}

export default function App() {
  return (
    <MockAuthProvider>
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />

            <Route path="/app" element={<PortalShell />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="leads" element={<LeadListPage />} />
              <Route path="leads/new" element={<LeadCreatePage />} />
              <Route path="leads/:id" element={<LeadDetailPage />} />
              <Route path="quotations" element={<QuotationListPage />} />
              <Route path="projects" element={<ProjectListPage />} />
              <Route path="tasks" element={<TaskListPage />} />
              <Route path="payments" element={<PaymentListPage />} />
              <Route path="invoices" element={<InvoiceListPage />} />
              <Route path="amc" element={<AmcListPage />} />
              <Route path="support" element={<SupportPage />} />
              <Route path="admin/users" element={<AdminUsersPage />} />
              <Route path="admin/roles" element={<AdminRolesPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="services/:serviceSlug" element={<ServiceDetailPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="products/:productSlug" element={<ProductDetailPage />} />
              <Route path="case-studies" element={<CaseStudiesPage />} />
              <Route path="case-studies/:caseSlug" element={<CaseStudyDetailPage />} />
              <Route path="insights" element={<InsightsPage />} />
              <Route path="insights/:insightSlug" element={<InsightDetailPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="demo" element={<DemoPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MockAuthProvider>
  )
}
