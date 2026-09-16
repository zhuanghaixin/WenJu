import type { ReactNode } from 'react'
import { TabBar } from './TabBar'

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <main className="app-main">{children}</main>
      <TabBar />
    </div>
  )
}
