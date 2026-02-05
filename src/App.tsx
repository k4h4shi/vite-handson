import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background shadow-sm">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center px-6">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M12.5 4.5L6.5 10.5L3.5 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">TodoApp</span>
          </div>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-[1280px] flex-1 justify-center px-6 py-8 md:px-0">
        <Outlet />
      </main>
    </div>
  )
}

export default App
