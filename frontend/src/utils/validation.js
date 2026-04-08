export const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) return "Full name is required"
      if (value.trim().length < 2) return "Name must be at least 2 characters"
      return ""
    case "email":
      if (!value) return "Email is required"
      if (!/\S+@\S+\.\S+/.test(value)) return "Please enter a valid email address"
      return ""
    case "password":
      if (!value) return "Password is required"
      if (value.length < 6) return "Password must be at least 6 characters"
      return ""
    default:
      return ""
  }
}

export const validateForm = (form, fields) => {
  const errors = {}
  fields.forEach(field => {
    const error = validateField(field, form[field])
    if (error) errors[field] = error
  })
  return errors
}