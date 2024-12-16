
import { addItem } from "../util/cartSlice";

import { useDispatch } from "react-redux";
const ItemCat =(props) =>{
const {menu} = props;

const dispatch = useDispatch();

const handleClick =(menus)=>{

dispatch(addItem(menus))
}

    return(
        <div>
         <div>

{menu?.map((menus) => {
  
  return (
    <div
      className="list-none m-4 border-gray-300 border-b-2 text-left"
      key={menus?.card?.info?.id}
    >
      <div className="flex justify-between">
        <div>
          <span className="text-lg">{menus?.card?.info?.name}</span>

          <span>
            ₹
            {menus?.card?.info?.price
              ? menus?.card?.info?.price / 100
              : menus?.card?.info?.defaultPrice / 100}
          </span>
        </div>

        <div>
        <div className="absolute"> <button className="bg-gray-300 border rounded-md" onClick={()=>(handleClick(menus))}>Add+</button></div>

          <img
            className="w-15 h-[80px] border rounded-md"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              menus?.card?.info?.imageId
            }
          />
        </div>
      </div>

      <div>
      <p className="text-xs w-[300px]  font-semibold">{menus?.card?.info?.description}</p>

      </div>

    </div>
  );
})}
</div>
        </div>
    )
}

export default ItemCat;