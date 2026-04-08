export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
        <p className="mt-4 text-stone-600 font-medium">Loading dashboard...</p>
      </div>
    </div>
  )
}