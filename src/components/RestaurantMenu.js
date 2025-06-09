import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import ShimmerMenu from "./ShimmerMenu";

function RestaurantMenu() {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex , setShowIndex] = useState(null);

  if (resInfo === null) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-6">{name}</h1>
      <h3>
        {cuisines.join(" , ")}
        {" - " + costForTwoMessage}
      </h3>

      {/* {Accordians for each category} */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            showItems={index === showIndex ? true : false}
            data={category.card.card}
            setShowIndex={() => setShowIndex(showIndex === index ? null : index)}

          />
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
