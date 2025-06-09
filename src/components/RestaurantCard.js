import { CDN_URL } from "../utils/constants";
import React from "react";
const RestaurantCard = (props) => {
  
  
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } = props?.resData;;
  
  return (
    <div data-testid="resCard" className="res-card m-3 p-4 w-[250px] break-words rounded-lg bg-gray-100 hover:bg-gray-200 hover:shadow-xl/15">
      <img
        alt="resLogo"
        className="w-xl h-50 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{props.resData.sla.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

 export const withDiscount = (RestaurantCard)=>{

  return(props)=>{
    const discount = props?.resData?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        {
          <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded text-xs font-semibold z-10">
            {discount.header} {discount.subHeader}
          </div>
        }
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
