
export default function Input({
  name,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-stone-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        className={`w-full px-4 py-3 rounded-xl border ${
          touched && error ? "border-red-500 focus:ring-red-500" : "border-stone-200 focus:ring-amber-500 focus:border-amber-500"
        } focus:ring-2 transition-all outline-none text-stone-900 placeholder:text-stone-400`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}