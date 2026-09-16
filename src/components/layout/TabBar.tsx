import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: '今日', icon: '✓' },
  { to: '/plan', label: '计划', icon: '☰' },
  { to: '/guide', label: '要领', icon: '♡' },
]

export function TabBar() {
  return (
    <nav className="tab-bar" aria-label="主导航">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) => (isActive ? 'tab-item is-active' : 'tab-item')}
        >
          <span className="tab-icon" aria-hidden>
            {tab.icon}
          </span>
          <span>{tab.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
