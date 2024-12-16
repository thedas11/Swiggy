import { useParams } from "react-router-dom";
import ShimmerUI from "./Shim";
import MenuCategory from "./MenuCategory";
import useRestaurantfetch from "../util/useRestauantFetch";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restMenu = useRestaurantfetch(resId);

  if (restMenu === null) {
    return <ShimmerUI />;
  }

  const { name, costForTwoMessage } = restMenu?.cards[2]?.card?.card?.info;
  const type =
    restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) => {
        return (
          cat?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

    console.log(type)


  return (


    <div className="text-center bg-cyan-50 ">



      {console.log(type)}

      <h2 className="font-bold my-6 text-3xl">{name}</h2>

      <p className="font-bold text-lg"> {restMenu?.cards[2]?.card?.card?.info.cuisines.join(',')} : {costForTwoMessage}</p>


      <div className="menu-box">
        {type?.map((types, index) => {
          return (
            <MenuCategory
              key={index}
              types={types}
              menu={types?.card?.card?.itemCards}

              // showItems = {index === showIndex ? "true":"false"}

              // ShowItemsfunc = {()=>setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
