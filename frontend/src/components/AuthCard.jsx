export default function AuthCard({ title, subtitle, children }) {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-50">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-stone-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-stone-900">{title}</h1>
          <p className="text-stone-500 mt-2">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  )
}