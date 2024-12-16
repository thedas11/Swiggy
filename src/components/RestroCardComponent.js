import { Card_LOGO } from "../util/logo";
import { useContext } from "react";
import UserContext from "../util/UserContext";

const RestroCardComponent = (props) => {
    const { name } = props;
    const{cloudinaryImageId} = name?.info

    return (
      <div className="m-4  w-[250px] h-[450px] bg-slate-100  hover:bg-slate-400 ">

        <img
          className="card-img rounded-lg px-1 py-1  "
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
        <div className="Menu-details m-1 pr-5 ">
        <h2 className="font-bold text-lg m-1">{name?.info?.name}</h2>
        <p className="text-md m-1">{name?.info?.costForTwo}</p>
        <p className="text md m-1">avgrating:{name?.info?.avgRating}</p>
        <p className="text-xs m-1">{name?.info?.cuisines.join(",")}</p>
        <p className="text-xs m-1">{name?.info?.sla?.deliveryTime} mins</p>
        </div>
      </div>
    );
};

export default RestroCardComponent;


// export const withPromotedLabel = (CardComponent) =>{

//   return()=>{

//     <div>
//     <label> Promoted </label>
//     <CardComponent />
//     </div>
//   }
// };