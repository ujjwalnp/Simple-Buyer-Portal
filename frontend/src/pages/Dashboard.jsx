import { useState, useEffect } from "react"
import { getMyProfile } from "../features/user"
import { getMyFavourites, addToFavourites, removeFromFavourites } from "../features/favourites"
import { getAllProperties } from "../features/properties"
import DashboardLayout from "../components/DashboardLayout"
import FavouriteSection from "../components/FavouriteSection"
import PropertiesSection from "../components/PropertiesSection"
import LoadingSpinner from "../components/LoadingSpinner"
import Alert from "../components/Alert"

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [favourites, setFavourites] = useState([])
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  useEffect(() => {
    fetchInitialData()
  }, [])

  const fetchInitialData = async () => {
    setLoading(true)
    setError("")
    try {
      const results = await Promise.allSettled([
        getMyProfile(),
        getMyFavourites(),
        getAllProperties(),
      ])

      if (results[0].status === "fulfilled") {
        setUser(results[0].value.data.user)
      } else {
        setError("Failed to load user profile")
      }

      if (results[1].status === "fulfilled") {
        setFavourites(results[1].value.data.favourites || [])
      } else {
        setFavourites([]) 
        console.log("No favourites found (404), setting to empty.")
      }

      if (results[2].status === "fulfilled") {
        setProperties(results[2].value.data.properties || [])
      } else {
        console.error("Properties fetch failed")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to load dashboard data")
    } finally {
      setLoading(false)
    }
  }

  const handleAddToFavourites = async (propertyId) => {
    try {
      await addToFavourites(propertyId)

      const favouritesRes = await getMyFavourites()
      setFavourites(favouritesRes.data.favourites || [])
      setSuccess("Property added to favourites!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add to favourites")
      setTimeout(() => setError(""), 3000)
    }
  }

  const handleRemoveFromFavourites = async (propertyId) => {
    try {
    await removeFromFavourites(propertyId)
    
    try {
        const favouritesRes = await getMyFavourites()
        setFavourites(favouritesRes.data.favourites || [])
      } catch (refetchErr) {
        if (refetchErr.response?.status === 404) {
          setFavourites([]) 
        } else {
          throw refetchErr
        }
      }

      setSuccess("Property removed from favourites!")
      setTimeout(() => setSuccess(""), 3000)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to remove from favourites")
      setTimeout(() => setError(""), 3000)
    }
  }

  const isPropertyFavourite = (propertyId) => {
    return favourites.some((fav) => fav.property?._id === propertyId || fav.property === propertyId)
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <DashboardLayout user={user}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Alert type="error" message={error} />
        <Alert type="success" message={success} />

        <FavouriteSection
          favourites={favourites}
          onRemoveFromFavourites={handleRemoveFromFavourites}
        />

        <PropertiesSection
          properties={properties}
          favourites={favourites}
          isPropertyFavourite={isPropertyFavourite}
          onAddToFavourites={handleAddToFavourites}
          onRemoveFromFavourites={handleRemoveFromFavourites}
        />
      </div>
    </DashboardLayout>
  )
}