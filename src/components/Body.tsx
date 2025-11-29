import { useEffect, useState } from "react";
import { ResCard } from "./ResCard";
import Shimmar from "./Shimmar";
import { Link } from "react-router-dom";
import type { Restaurant, Root } from "../utils/constants";

export function Body() {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch(
          "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json: Root = await data.json();

        const restaurants =
          json?.data?.cards
            ?.map((c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.flat()
            ?.filter((r): r is Restaurant => Boolean(r)) ?? [];

        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (err) {
        console.error("Error fetching restaurant list", err);
      }
    }

    fetchData();
  }, []);


  function handleSearch() {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }

  function filterTopRated() {
    const topRated = allRestaurants.filter(
      (res) => Number(res.info.avgRating) > 4
    );
    setFilteredRestaurants(topRated);
  }

  if (allRestaurants.length === 0) return <Shimmar />;

  return (
    <div className="bg-gray-100 container mx-auto p-5">
      <div className="flex flex-wrap items-center gap-3 mb-6 justify-center">
        <input
          type="text"
          placeholder="Search restaurants..."
          className=" w-60 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-300 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent hover:-translate-y-0.5 hover:shadow-xl"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-red-500 text-white font-normal px-4 py-2 rounded-lg hover:bg-red-700 shadow-sm hover:shadow-lg transition-all duration-300 focus:border-transparent hover:-translate-y-0.5"
        >
          Search
        </button>

        <button
          onClick={filterTopRated}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
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

