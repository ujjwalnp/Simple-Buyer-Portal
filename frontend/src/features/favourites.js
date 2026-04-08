import api from "../services/apiClient"

export const getMyFavourites = () => api.get("/favourites/me")

export const addToFavourites = (propertyId) => api.post(`/favourites/${propertyId}`)

export const removeFromFavourites = (propertyId) => api.delete(`/favourites/${propertyId}`)