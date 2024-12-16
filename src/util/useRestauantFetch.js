import {useEffect, useState } from "react"
import { Menu_API } from "./variable";


const useRestaurantfetch= (resId)=>{

    const[restsMenu,setrestsMenu] = useState(null);

    useEffect(()=>{
        fetchmenus();

    },[])

    const fetchmenus = async ()=>{

        const data = await fetch (Menu_API + resId);
        const json = await data.json()

        setrestsMenu(json.data);

    }

    return restsMenu;

}
export default useRestaurantfetch;