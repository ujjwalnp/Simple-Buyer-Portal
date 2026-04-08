import { useState } from "react";
import { validateField } from "../utils/validation";

export const useAuthForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, form[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateFormFields = (fields) => {
    const newErrors = {};
    fields.forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });
    setErrors(newErrors);
    const allTouched = {};
    fields.forEach((field) => (allTouched[field] = true));
    setTouched(allTouched);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    setTouched({});
    setServerError("");
    setSuccess("");
    setLoading(false);
  };

  return {
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
    resetForm,
  };
};