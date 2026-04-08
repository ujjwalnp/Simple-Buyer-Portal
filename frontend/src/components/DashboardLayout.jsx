export default function DashboardLayout({ user, children }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-stone-900">Dashboard</h1>
              <p className="text-stone-500 mt-1">
                Welcome back, {user?.name || "User"}!
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-stone-700">Role</div>
              <div className="text-sm text-stone-500 capitalize">
                {user?.role || "User"}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  )
}