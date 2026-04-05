import { createContext, useCallback, useContext, useEffect, useMemo, useReducer } from 'react'
import { createInitialState } from '../data/seed'

const STORAGE_KEY = 'aubizo-portal-mock-state-v1'

const PortalStateContext = createContext(null)

function portalReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return createInitialState()
    case 'ADD_LEAD': {
      const lead = {
        ...action.payload,
        id: action.payload.id ?? `lead-${Date.now()}`,
        notes: action.payload.notes ?? [],
        followUps: action.payload.followUps ?? [],
      }
      return { ...state, leads: [...state.leads, lead] }
    }
    case 'UPDATE_LEAD':
      return {
        ...state,
        leads: state.leads.map((l) => (l.id === action.payload.id ? { ...l, ...action.payload } : l)),
      }
    case 'ADD_LEAD_NOTE': {
      const { leadId, text } = action.payload
      const at = new Date().toISOString().slice(0, 10)
      return {
        ...state,
        leads: state.leads.map((l) =>
          l.id === leadId ? { ...l, notes: [...l.notes, { at, text }] } : l,
        ),
      }
    }
    case 'ADD_FOLLOWUP': {
      const { leadId, text } = action.payload
      const at = new Date().toISOString().slice(0, 10)
      return {
        ...state,
        leads: state.leads.map((l) =>
          l.id === leadId ? { ...l, followUps: [...l.followUps, { at, text }] } : l,
        ),
      }
    }
    default:
      return state
  }
}

function loadPersisted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') return null
    return parsed
  } catch {
    return null
  }
}

export function PortalStateProvider({ children }) {
  const [state, dispatch] = useReducer(portalReducer, undefined, () => {
    const saved = loadPersisted()
    const base = createInitialState()
    if (!saved) return base
    return {
      ...base,
      ...saved,
      leads: Array.isArray(saved.leads) ? saved.leads : base.leads,
      quotations: Array.isArray(saved.quotations) ? saved.quotations : base.quotations,
      projects: Array.isArray(saved.projects) ? saved.projects : base.projects,
      tasks: Array.isArray(saved.tasks) ? saved.tasks : base.tasks,
      payments: Array.isArray(saved.payments) ? saved.payments : base.payments,
      invoices: Array.isArray(saved.invoices) ? saved.invoices : base.invoices,
      amc: Array.isArray(saved.amc) ? saved.amc : base.amc,
      users: Array.isArray(saved.users) ? saved.users : base.users,
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const resetStore = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    dispatch({ type: 'RESET' })
  }, [])

  const value = useMemo(() => ({ state, dispatch, resetStore }), [state, resetStore])

  return <PortalStateContext.Provider value={value}>{children}</PortalStateContext.Provider>
}

export function usePortalState() {
  const ctx = useContext(PortalStateContext)
  if (!ctx) throw new Error('usePortalState outside PortalStateProvider')
  return ctx
}
