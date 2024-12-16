import { useState } from "react";
import ItemCat from "./ItemsCat";
const MenuCategory = (props) => {
  const { types, menu , showItems} = props;

  const[showcat,setShowcat] = useState(false)

 console.log(showItems)


  const handleClick =() =>{

    setShowcat(!showcat)

    

  }
  return (
    <div >
      <div className="bg-slate-200 w-6/12 my-4 mx-auto p-4 shadow-lg">
        <div className="  flex justify-between ">
        <button onClick={handleClick}> <span className="text-lg bold">
            {types?.card?.card?.title} ({menu.length})
          </span> </button>
          <span>🔽</span>
        </div>


        {showcat && <ItemCat menu={menu} />   }
       
    </div>
    </div>
  );
};
export default MenuCategory;
