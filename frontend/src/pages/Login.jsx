import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/auth";
import { setToken } from "../utils/cookie";
import { useAuthForm } from "../hooks/useAuthForm";
import AuthCard from "../components/AuthCard";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import Alert from "../components/Alert";
import AuthFooter from "../components/AuthFooter";

export default function Login() {
  const navigate = useNavigate();
  const {
    form,
    errors,
    touched,
    serverError,
    success,
    loading,
    setServerError,
    setSuccess,
    setLoading,
    handleChange,
    handleBlur,
    validateFormFields,
  } = useAuthForm({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setSuccess("");

    if (!validateFormFields(["email", "password"])) {
      return;
    }

    setLoading(true);

    try {
      const res = await loginUser(form);
      setToken(res.data.token);
      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setServerError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard title="Welcome Back" subtitle="Sign in to your account">
      <Alert type="error" message={serverError} />
      <Alert type="success" message={success} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
          touched={touched.email}
          required
        />

        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
          touched={touched.password}
          required
        />

        <SubmitButton loading={loading} loadingText="Signing in..." text="Login" />
      </form>

      <AuthFooter message="Don't have an account?" linkText="Create one" linkPath="/register" />
    </AuthCard>
  );
}