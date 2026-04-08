import api from "../services/apiClient"

export const getMyProfile = () => api.get("/users/me")