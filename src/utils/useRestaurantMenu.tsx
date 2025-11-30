import { useEffect, useState } from "react";
import type { Data, Root } from "./type";

const MENU_API = import.meta.env.VITE_MENU_API;

function useRestaurantMenu(resId:string){
    //fetching the data
    const [data, setData] = useState<Data | null>(null);
      
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const res = await fetch(MENU_API+resId)
        const json  = await res.json() as Root
        setData(json.data);
    }
    return data; 
}

export default useRestaurantMenu; 