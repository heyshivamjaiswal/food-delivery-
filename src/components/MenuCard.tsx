import type { Info5 } from "../utils/type";
const CDN_SMALL = import.meta.env.VITE_SWIGGY_CDN_SMALL;

interface MenuCardProps {
  restaurantInfo: Info5;
}

export default function MenuCard({ restaurantInfo }: MenuCardProps) {
  const { name, description, imageId, price, finalPrice, defaultPrice, isVeg, ratings } = restaurantInfo;

  const itemPrice = (finalPrice ?? price ?? defaultPrice ?? 0) / 100;
  const rating = ratings?.aggregatedRating?.rating;
  const ratingCount = ratings?.aggregatedRating?.ratingCount;

  return (
    <div className="menu-card flex flex-col sm:flex-row gap-4 items-start bg-white border rounded-lg p-4 w-full sm:max-w-full shadow-sm hover:shadow-md transition">
      {/* Image */}
      {imageId ? (
        <img
          src={`${CDN_SMALL}/${imageId}`}
          alt={name}
          className="w-full sm:w-24 h-24 sm:h-24 rounded object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-full sm:w-24 h-24 sm:h-24 bg-gray-200 rounded flex-shrink-0" />
      )}

      {/* Text Content */}
      <div className="menu-card-text flex-1 min-w-0">
        <h2 className="font-medium text-lg truncate">{name}</h2>

        {rating && (
          <h3 className="flex gap-2 text-sm mt-1 items-center">
            <span>⭐ {rating}</span>
            <span className="text-gray-500 text-xs truncate">({ratingCount})</span>
          </h3>
        )}

        <p className="text-sm mt-1 font-semibold">Rs. {itemPrice.toFixed(0)}</p>

        {description && (
          <p className="text-sm text-gray-600 mt-1 line-clamp-3">
            {description}
          </p>
        )}

        <p className="text-sm mt-1 font-medium">{isVeg ? "Veg" : "Non-Veg"}</p>
      </div>
    </div>
  );
}
