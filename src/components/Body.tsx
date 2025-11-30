import { useEffect, useState } from "react";
import { ResCard } from "./ResCard";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import type { Restaurant, Root } from "../utils/constants";
const RESTAURANT_API = import.meta.env.VITE_RESTAURANT_API;

export function Body() {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          RESTAURANT_API
        );
        const json: Root = await data.json();

        const restaurants =
        json?.data?.cards
         ?.flatMap((c) =>
         c.card?.card?.gridElements?.infoWithStyle?.restaurants??[] )
       .filter((r,i , arr)=>arr.findIndex((x)=>x.info.id === r.info.id) === i)


        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (err) {
        console.error("Error fetching restaurant list", err);
      }
    }

    fetchData();
  }, []);

 function handleSearch(){
  const filtered = allRestaurants.filter((res)=>
  res.info.cuisines?.some(cusine=>
    cusine.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  )
  );
  setFilteredRestaurants(filtered)
 }


 function filterTopRated() {
  const topRated = allRestaurants.filter((res) => {
    const rating = Number(res.info.avgRating);
    return !isNaN(rating) && rating >= 4.5;
  });
  setFilteredRestaurants(topRated);
}

  if (allRestaurants.length === 0) return <Shimmar />;

  return (
    <div className="bg-gray-100 container mx-auto p-5">
      <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 justify-center z-10 relative">
        <input
          type="text"
          placeholder="Search cuisines..."
          className=" w-full sm:w-60 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-300 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent hover:-translate-y-0.5 hover:shadow-xl"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="w-full sm:w-auto bg-red-500 text-white font-normal px-4 py-2 rounded-lg hover:bg-red-700 shadow-sm hover:shadow-lg transition-all duration-300 focus:border-transparent hover:-translate-y-0.5"
        >
          Search
        </button>

        <button
          onClick={filterTopRated}
          className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Top Rated
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className=" block rounded-2xl bg-white p-1 shadow-md transition-all duration-300transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 active:translate-y-1"
          >
            <ResCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
}

