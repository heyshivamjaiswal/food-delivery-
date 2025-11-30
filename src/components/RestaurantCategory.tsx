import { useState } from "react";
import type { Category } from "../utils/type";
import { ItemList } from "./ItemList";

type Props = {
  cat: Category[];
};

function RestaurantCategory({ cat }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setOpenCategory(prev => (prev === title ? null : title));
  };

  return (
    <div className="space-y-5">
      {cat.map((c) => (
        <div
          key={c.title}
          className="w-full sm:w-4/5 md:w-3/5 mx-auto bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden"
        >
          {/* Category Header */}
          <div
            className={`flex justify-between items-center p-5 cursor-pointer transition-all duration-300
                        ${openCategory === c.title ? "bg-gray-100" : "hover:bg-gray-50"}`}
            onClick={() => handleToggle(c.title)}
          >
            <span className="font-semibold text-lg sm:text-xl text-gray-800 truncate">
              {c.title} ({c.itemCards?.length ?? 0})
            </span>

            <span
              className={`text-xl font-bold text-gray-600 transform transition-transform duration-300
                          ${openCategory === c.title ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </div>

          {/* Item List */}
          {openCategory === c.title && (
            <div className="px-5 pb-5 bg-gray-50 transition-all duration-300">
              <ItemList item={c.itemCards} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RestaurantCategory;
