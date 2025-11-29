import { useEffect, useState } from "react";
import type { Data, Root } from "./type";

function useRestaurantMenu(resId:string){
    //fetching the data
    const [data, setData] = useState<Data | null>(null);
      
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const res = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&submitAction=ENTER&restaurantId="+resId)
        const json  = await res.json() as Root
        setData(json.data);
    }
    return data; 
}

export default useRestaurantMenu; 