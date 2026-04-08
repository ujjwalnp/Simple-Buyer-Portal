import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline"
import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"

export default function PropertyCard({ 
  property, 
  isFavourite, 
  onAddToFavourites, 
  onRemoveFromFavourites,
  showRemoveButton = false 
}) {
  const propertyData = property.property || property
  const targetId = propertyData._id

  const handleFavouriteClick = () => {
    if (isFavourite || showRemoveButton) {
      onRemoveFromFavourites(targetId)
    } else {
      onAddToFavourites(targetId)
    }
  }

  const isFav = isFavourite || showRemoveButton

  return (
    <div className="bg-white rounded-xl shadow-md border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-1">
              {propertyData.title || "Property Title"}
            </h3>
            <p className="text-sm text-stone-500">
              {propertyData.location || "Location not specified"}
            </p>
          </div>
          <button
            onClick={handleFavouriteClick}
            title={isFav ? "Remove from favourites" : "Add to favourites"}
            className="p-2 hover:bg-stone-100 rounded-full transition-colors cursor-pointer"
          >
            {isFav ? (
              <HeartSolid className="h-6 w-6 text-red-500" />
            ) : (
              <HeartOutline className="h-6 w-6 text-stone-400 hover:text-red-500" />
            )}
          </button>
        </div>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-stone-600 line-clamp-2">
            {propertyData.description || "No description available"}
          </p>
          {propertyData.price && (
            <p className="text-lg font-bold text-amber-700">
              ${propertyData.price.toLocaleString()}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-stone-100">
          <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
            📐 {propertyData.area} sq ft
          </span>
        </div>
      </div>
    </div>
  )
}