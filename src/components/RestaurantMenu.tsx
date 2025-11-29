
import { useParams } from "react-router-dom";
import Shimmar from "./Shimmar";
import RestaurantCategory from "./RestaurantCategory";
import type { Category } from "../utils/type";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCard from "./MenuCard";

function RestaurantMenu(){
  const { resId } = useParams<{ resId: string }>();
  if (!resId) return <div>Invalid Restaurant</div>;


  const data = useRestaurantMenu(resId);
  if (!data) return <Shimmar />;

  const menuInfo =
    data.cards.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap.REGULAR
      .cards ?? [];

  const categories: Category[] = menuInfo
    .flatMap((c) => c.card?.card?.categories??[])
    .filter((cat): cat is Category => !!cat);

    const regularCards =
    data?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

   const fallbackItems = regularCards
  .flatMap((c) => c .card?.card?.itemCards || []);

  return (
  <div className="menu container mx-auto px-4 py-6">

    {categories.length > 0 ? (
      <RestaurantCategory cat={categories} />
    ) : (
      <div className="grid gap-4">
        {fallbackItems.map((item) => (
          <MenuCard key={item.card.info.id} restaurantInfo={item.card.info} />
        ))}
      </div>
    )}

  </div>
);
} 

export default RestaurantMenu;
