import React from "react";
import { CDN_URL } from "../utils/constants";
import { addItems, removeSingleItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ list, showAddButton = true, showRemoveButton = false }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeSingleItem(item));
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <div
            key={`${item.card.info.id} - ${index}`}
            data-testid = "foodItems"
            className="p-3 m-2  border-gray-300 border-b-2 text-left flex justify-between"
          >
            <div className="w-10/12">
              <div className="pb-2 text-md">
                <span>{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-2/10 ">
              <div className="absolute flex flex-col items-center">
                {showAddButton && (
                  <button
                    onClick={() => handleAddItems(item)}
                    className="bg-white text-sm text-green-600 shadow-xl px-5 mx-7 mt-27 rounded-xl p-2 cursor-pointer"
                  >
                    Add+
                  </button>
                )}
                {showRemoveButton && (
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="bg-red-100 text-sm text-red-600 shadow-xl px-3 mx-7 mt-27 rounded-xl p-2 cursor-pointer"
                  >
                    Remove
                  </button>
                )}
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                alt="Image of food"
                className="w-30 h-30 m-2"
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
