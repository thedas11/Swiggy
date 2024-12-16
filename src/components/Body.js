import RestroCardComponent from "./RestroCardComponent";
import { useState, useEffect}  from "react";
import ShimmerUI from "./Shim";
import { Link } from "react-router-dom";
const Body = () => {
   const [restData, setrestData] = useState([]);

   const[filtrest, setFiltrest] = useState([])

   const [searchvalue, setsearchvalue] = useState("");
 
  useEffect(() => {
    call();
  }, []);

  const call = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setrestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltrest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  
    if (filtrest?.length===0 )
    {

      return(
        <>
        <ShimmerUI />
      </>
      )
    } 
    
       else {

    return (

      <div className="body-elem bg-green-50">

        <div className="filter flex ">

          <div className="top-rated p-8">
          <button className=" px-4 py-1 m-2 bg-gray-200 rounded-lg "
            onClick={() => {
              const filteredrest = restData.filter(
                (filrest) => filrest?.info?.avgRating > 4.5
              );

              setFiltrest(filteredrest);
            }}
          
          >
            Top rated restaurant
          </button>
          </div>
         <div className="search m-4 p-4 ">
          <input
            type="text"
            className=" border border-solid border-black"
            value={searchvalue}
            onChange={(e) => {

              console.log(e); // resume fom here

            if( e.target.value === "") {

              setsearchvalue(e.target.value)

              setFiltrest(restData)

            }

            else {
             
              setsearchvalue(e.target.value)

            }
          }}
          />
          <button className=" px-4 py-1 m-2 bg-green-100 "
            onClick={() => {
              const filtersearchbtn = restData.filter((filterrest) => {
                return filterrest?.info?.name
                  .toLowerCase()
                  .includes(searchvalue.toLowerCase()); 
              });
               setFiltrest(filtersearchbtn)
            }}
          >
            Search
          </button>

          </div>
        </div>
        <div className="res-card-cont flex flex-wrap">
          {filtrest?.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestroCardComponent name={restaurant} key={restaurant?.info?.id} id="restaurant?.info?.id" />
            </Link>
        
          ))}
        </div>
      </div>
    );
  }
};
export default Body;
