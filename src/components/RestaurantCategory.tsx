import { useState } from "react";
import type { Category } from "../utils/type";
import { ItemList } from "./ItemList";

type Props = {
  cat: Category[];
};

function RestaurantCategory({ cat }: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleToggle = (title: string) => {
    setOpenCategory(prev => prev === title ? null : title);
  };

  return (
    <div className="space-y-4">
      {cat.map((c) => (
        <div
          key={c.title}
          className="w-3/5 mx-auto bg-gray-50 shadow-md rounded-xl"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => handleToggle(c.title)}
          >
            <span className="font-bold text-lg">
              {c.title} ({c.itemCards?.length ?? 0})
            </span>

            <span className="text-xl">
              {openCategory === c.title ? "▲" : "▼"}
            </span>
          </div>
          {openCategory === c.title && (
            <div className="px-4 pb-4">
              <ItemList item={c.itemCards} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default RestaurantCategory;
