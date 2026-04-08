export default function SubmitButton({ loading, loadingText, text }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-amber-700 text-white py-3.5 rounded-xl font-bold text-lg hover:bg-amber-800 transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? loadingText : text}
    </button>
  );
}