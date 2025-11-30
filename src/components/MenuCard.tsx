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
    <div className="menu-card flex gap-4 items-start bg-white border rounded-lg p-4">
      {imageId ? (
        <img
          src={`${CDN_SMALL}/${imageId}`}
          alt={name}
          className="w-20 h-20 rounded object-cover"
        />
      ) : (
        <div className="w-20 h-20 bg-gray-200 rounded" />
      )}
      <div className="menu-card-text flex-1">
        <h2 className="font-medium text-lg">{name}</h2>

        {rating && (
          <h3 className="flex gap-3 text-sm mt-1">
            ⭐ {rating} <span>({ratingCount})</span>
          </h3>
        )}

        <p className="text-sm mt-1">Rs. {itemPrice.toFixed(0)}</p>

        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}

        <p className="text-sm mt-1">{isVeg ? "Veg" : "Non-Veg"}</p>
      </div>
    </div>
  );
}
