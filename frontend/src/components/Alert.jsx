export default function Alert({ type, message, onClose }) {
  if (!message) return null

  const styles = {
    success: "bg-green-50 text-green-700 border-green-100",
    error: "bg-red-50 text-red-600 border-red-100",
    info: "bg-blue-50 text-blue-700 border-blue-100",
  }

  return (
    <div className={`mb-6 p-4 rounded-lg text-sm font-medium border ${styles[type]}`}>
      <div className="flex justify-between items-center">
        <span>{message}</span>
        {onClose && (
          <button onClick={onClose} className="ml-4 text-lg font-bold">
            ×
          </button>
        )}
      </div>
    </div>
  )
}