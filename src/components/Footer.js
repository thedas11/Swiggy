import { useEffect, useState } from "react";

import { head_LOGO } from "../util/logo";

import ShimmerUI from "./Shim";
const Footer = () => {
  const [footData, setFootData] = useState([]);

  useEffect(() => {
    callFoot();
  }, []);

  const callFoot = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setFootData(json?.data?.cards[10]?.card?.card?.cities.slice(0, 10));
  };


  return (
    <div>
      <div> For better experience,download the Swiggy app now </div>

      <div className="flex">
        <div>
          <img src={head_LOGO} className="text-lg" />
          <span className="mx-4">© 2024 Company Limited</span>
        </div>
        <div className="my-20 mx-10">
          <p className="text-lg font-bold">Available Cities: </p>
          {footData?.map((cities, index) => {
            return (
              <li key={index} className="list-none">
                <p className="text-lg"> {cities.text} </p>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
