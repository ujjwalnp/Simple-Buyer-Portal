import PropertyCard from "./PropertyCard"

export default function PropertiesSection({ 
  properties, 
  isPropertyFavourite, 
  onAddToFavourites, 
  onRemoveFromFavourites 
}) {
  if (!properties || properties.length === 0) {
    return (
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-stone-900">Available Properties</h2>
        </div>
        <div className="bg-white rounded-xl border border-stone-200 p-8 text-center">
          <p className="text-stone-500">No properties available at the moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-stone-900">Available Properties</h2>
        <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
          {properties.length} {properties.length === 1 ? "property" : "properties"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
            isFavourite={isPropertyFavourite(property._id)}
            onAddToFavourites={onAddToFavourites}
            onRemoveFromFavourites={onRemoveFromFavourites}
          />
        ))}
      </div>
    </div>
  )
}