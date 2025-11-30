import { useDispatch } from "react-redux";
import type { ItemCard } from "../utils/type";
import { adddItem } from "../utils/cartSlice";
import { useState } from "react";

type itemProp = {
  item?: ItemCard[];
};

export const ItemList = ({ item }: itemProp) => {
  if (!item || item.length === 0) return null;

const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

   
  const dispatch = useDispatch();
 
  const handleAddItem = (item:ItemCard)=>{
    //dispatch an action 
    dispatch(adddItem(item))

    setAddedItems((prev) => new Set(prev).add(item.card.info.id));

  }

  return (
    <ul className="mt-4 space-y-8">
      {item.map((t) => (
        <li
          key={t?.card?.info?.id}
          className="flex justify-between items-start border-b pb-8"
        >
          <div className="flex-1 pr-6">
            <div className="flex justify-between items-start">
              <span className="font-semibold text-lg leading-snug">
                {t?.card?.info?.name}
              </span>

              <span className="font-semibold text-base">
                ₹{(t?.card?.info?.price ??t.card.info.defaultPrice??t.card.info.finalPrice?? 0) / 100}
              </span>
            </div>

            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {t?.card?.info?.description}
            </p>
          </div>

          <div className="relative">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/" +
                t?.card?.info?.imageId
              }
              className="w-32 h-32 object-cover rounded-xl shadow-md"
            />
              <div></div>
           <button
            className={`
              absolute bottom-2 left-1/2 -translate-x-1/2
              font-semibold border px-4 py-1 rounded-lg shadow-sm text-sm cursor-pointer
              ${addedItems.has(t.card.info.id)
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-green-600 border-gray-300 hover:bg-gray-100"}
            `}
            onClick={() => handleAddItem(t)}
          >
            {addedItems.has(t.card.info.id) ? "ADDED" : "ADD+"}
          </button>
          </div>
        </li>
      ))}
    </ul>
  ); 
};



