import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-white shadow-xl p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-medium text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>

        <div
          className="transition-all duration-500 ease-in-out overflow-hidden"
        >
          {showItems && <ItemList list={data?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
