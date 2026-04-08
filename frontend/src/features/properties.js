import api from "../services/apiClient"

export const getAllProperties = () => api.get("/properties")