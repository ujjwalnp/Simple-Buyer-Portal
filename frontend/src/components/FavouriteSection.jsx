import PropertyCard from "./PropertyCard"

export default function FavouriteSection({ favourites, onRemoveFromFavourites }) {
  if (!favourites || favourites.length === 0) {
    return (
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-stone-900">My Favourites</h2>
        </div>
        <div className="bg-white rounded-xl border border-stone-200 p-8 text-center">
          <p className="text-stone-500">No favourites yet. Start adding some properties!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-stone-900">My Favourites</h2>
        <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
          {favourites.length} {favourites.length === 1 ? "property" : "properties"}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favourites.map((favourite) => (
          <PropertyCard
            key={favourite._id}
            property={favourite}
            isFavourite={true}
            onRemoveFromFavourites={onRemoveFromFavourites}
            showRemoveButton={true}
          />
        ))}
      </div>
    </div>
  )
}