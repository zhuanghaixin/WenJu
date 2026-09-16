import { Navigate, Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { GuidePage } from '@/pages/GuidePage'
import { PlanPage } from '@/pages/PlanPage'
import { TodayPage } from '@/pages/TodayPage'

export function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<TodayPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}
