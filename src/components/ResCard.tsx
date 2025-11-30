import React from "react";
const CDN_URL = import.meta.env.VITE_SWIGGY_CDN;
import type { Info2 } from "../utils/constants";

export type resCarcInfo = {
  resData: Info2;
};

export function ResCard({ resData }: resCarcInfo) {
  const { name, cloudinaryImageId, cuisines, avgRating , badges , badgesV2 } = resData;

  const isPromoted = 
  badgesV2?.entityBadges.imageBased.badgeObject.some(
    (b)=>b.attributes.description == "Promoted")|| badges?.imageBadges.some((b)=>b.description == "Promoted");
  
  

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full p-4">
      
      {isPromoted &&(
        <span className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-br -scale-z-105"></span>
      )}
     
      <img
     src={
    cloudinaryImageId
      ? `${CDN_URL}/${cloudinaryImageId}`
      : "/no-image.png"
        }
        alt={name}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h3 className="font-semibold text-lg mb-1 line-clamp-1">{name}</h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
        {cuisines?.join(", ")}
      </p>

      <div className="mt-auto flex items-center gap-2">
        <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-md">
          ⭐ {avgRating}
        </span>
      </div>

    </div>
  );
}


export function withPromotedLabel<P extends resCarcInfo>(
  Component: React.ComponentType<P>
) {
  return function PromotedComponent(props: P) {
    return (
      <div className="relative">
        <span className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-br">
          Promoted
        </span>
        <Component {...props} />
      </div>
    );
  };
}
