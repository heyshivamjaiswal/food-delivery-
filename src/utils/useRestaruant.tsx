import { useState , useEffect } from "react";
import type {Root, Data} from "./constants";
const API_URL = import.meta.env.VITE_RESTAURANT_API;

export function useRestaurant(){
    const [data , setData] = useState<Data|null>(null)
      useEffect(()=>{
         const fetchData = async ()=>{
        const res = await fetch(
              API_URL
            );
           const json  = await res.json() as Root
           setData(json.data);
      } 
      fetchData();
      },[])

     
      return data;
    }