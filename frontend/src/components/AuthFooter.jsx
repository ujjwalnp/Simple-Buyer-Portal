import { useNavigate } from "react-router-dom";

export default function AuthFooter({ message, linkText, linkPath }) {
  const navigate = useNavigate();

  return (
    <div className="mt-8 text-center text-stone-600">
      {message}{" "}
      <button
        onClick={() => navigate(linkPath)}
        className="text-amber-700 font-bold hover:underline cursor-pointer"
      >
        {linkText}
      </button>
    </div>
  );
}