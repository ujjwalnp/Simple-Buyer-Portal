import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/auth"
import { useAuthForm } from "../hooks/useAuthForm"
import AuthCard from "../components/AuthCard"
import Input from "../components/Input"
import SubmitButton from "../components/SubmitButton"
import Alert from "../components/Alert"
import AuthFooter from "../components/AuthFooter"

export default function Register() {
  const navigate = useNavigate()
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
  } = useAuthForm({ name: "", email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError("")
    setSuccess("")

    if (!validateFormFields(["name", "email", "password"])) {
      return
    }

    setLoading(true)

    try {
      await registerUser(form)
      setSuccess("Registration successful! Redirecting to login...")
      setTimeout(() => {
        navigate("/login")
      }, 1500)
    } catch (err) {
      setServerError(err.response?.data?.message || "Registration failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthCard title="Create Account" subtitle="Sign up to get started">
      <Alert type="error" message={serverError} />
      <Alert type="success" message={success} />

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          name="name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
          required
        />

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

        <SubmitButton loading={loading} loadingText="Creating account..." text="Register" />
      </form>

      <AuthFooter message="Already have an account?" linkText="Sign in" linkPath="/login" />
    </AuthCard>
  )
}