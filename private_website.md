# 2. Auth Pages

## 2.1 Login

- email / username
- password
- forgot password
- sign in button
- optional: client login / admin login

## 2.2 Forgot Password

- email field
- reset password button

## 2.3 Reset Password

- new password
- confirm password

---

# 3. Private Portal Pages

## 3.1 Dashboard

Make this role-based.

What goes here:

- leads count
- quotations count
- active projects
- pending payments
- renewals due
- quick actions

Admin dashboard may also show:

- total revenue
- pending collection
- AMC due count

Sales dashboard:

- my leads
- follow-ups due
- quotations sent

Developer dashboard:

- assigned projects
- pending tasks

Client dashboard:

- my projects
- invoice status
- support/contact

---

# 4. Lead Module Pages

## 4.1 Lead List Page

- all leads table
- filters: status, source, assigned person
- search
- add lead button

Columns:

- lead name
- company
- phone
- source
- status
- assigned to
- next follow-up
- actions

## 4.2 Lead Create Page

- name
- company
- phone
- email
- source
- requirement
- status
- assigned to
- next follow-up
- notes

## 4.3 Lead Detail Page

- lead info
- notes history
- follow-up history
- quotation linked
- status change option

---

# 5. Quotation / Proposal Pages

## 5.1 Quotation List Page

- quotations table
- filters: status, client, date
- create quotation button

Columns:

- quotation number
- client
- project type
- value
- version
- status
- date
- actions

## 5.2 Create Quotation Page

- client
- project title
- scope summary
- amount
- tax
- validity
- payment terms
- delivery timeline
- notes
- send / save draft

## 5.3 Quotation Detail Page

- full quotation
- version history
- approval status
- negotiation notes
- convert to project button

---

# 6. Project Pages

## 6.1 Project List Page

- all projects
- filters: status, assigned team, client
- create project button

Columns:

- project name
- client
- start date
- deadline
- status
- team lead
- actions

## 6.2 Project Create Page

- client
- project name
- project type
- start date
- end date
- team assigned
- scope summary
- priority
- status

## 6.3 Project Detail Page

- project summary
- scope
- assigned team
- milestone list
- tasks
- files/documents
- payment summary
- notes
- project timeline

---

# 7. Task Pages

## 7.1 Task List Page

- task table
- filters: status, project, assigned to
- create task button

Columns:

- task name
- project
- assigned to
- due date
- priority
- status
- actions

## 7.2 Task Create/Edit Page

- task title
- project
- description
- assigned to
- due date
- status
- priority

---

# 8. Payment Pages

## 8.1 Payment List Page

- all payments
- filters: client, status, due / paid
- add payment button

Columns:

- client
- project
- total amount
- received
- pending
- due date
- status
- actions

## 8.2 Payment Detail Page

- project value
- advance received
- installment history
- pending amount
- invoice link
- payment notes

---

# 9. Invoice Pages

## 9.1 Invoice List Page

- invoice table
- filters
- create invoice button

Columns:

- invoice number
- client
- amount
- issue date
- due date
- status
- actions

## 9.2 Invoice Detail Page

- invoice header
- client info
- billed items
- subtotal
- tax
- total
- payment status
- download / print

---

# 10. AMC / Renewal Pages

## 10.1 AMC List Page

- all AMC records
- filters: due, paid, expiring soon
- add AMC button

Columns:

- client
- project/product
- start date
- end date
- renewal amount
- renewal status
- actions

## 10.2 AMC Detail Page

- client
- project
- support scope
- AMC amount
- renewal date
- payment status
- notes
- reminder history

---

# 11. Client Portal Pages

## 11.1 Client Dashboard

- active projects
- payment status
- AMC renewal date
- support contact
- recent updates

## 11.2 My Projects

- project list
- status
- deadlines
- progress

## 11.3 My Invoices / Payments

- invoices
- paid/pending status
- download invoice

## 11.4 My AMC / Subscription

- active maintenance plan
- renewal due date
- amount
- status

## 11.5 Support / Contact Page

- issue form
- contact details
- ticket history if needed later

---

# 12. Admin Pages

## 12.1 User Management

- users list
- role
- active/inactive
- create user

## 12.2 Role / Permission Page

- role name
- module access
- page access
- action access

## 12.3 Settings Page

- company profile
- email settings
- branding
- GST / invoice settings
- notification settings

---

# 13. Important Rule: Which Page Should Show Money?

## Visible only to Admin / Finance

- revenue dashboard
- total collections
- quotation values if sensitive
- margins
- repayment terms
- AMC amounts if restricted

## Not visible to normal employee unless needed

- full revenue
- company-wide commercial data
- internal costs
- sensitive financial terms

---

# 14. Simplest Final Structure

## Public

- Home
- About
- Services
- How We Work
- Products
- Product Detail
- Portfolio / Case Studies
- Insights
- Contact
- Demo Request

## Private

- Login
- Dashboard
- Leads
- Quotations
- Projects
- Tasks
- Invoices
- Payments
- AMC Renewals
- Client Portal
- Users / Roles
- Settings

---

# 15. Cleanest Build Order

1. Login
2. Dashboard
3. Leads
4. Quotations
5. Projects
6. Tasks
7. Payments
8. AMC
9. Client Portal
10. Admin Settings
11. Public Website Pages
12. Product / Case Studies / Insights

If you want, I can now turn this into the exact **Django app structure + page-to-template mapping + URLs**.
