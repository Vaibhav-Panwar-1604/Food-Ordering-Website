import RestaurantCard, { withDiscount } from "./RestaurantCard";
import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowAltCircleRight } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [tempUserName, setTempUserName] = useState("");

  const ResCardDiscount = withDiscount(RestaurantCard);


  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log(listOfRestaurants)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333&lng=76.7794&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const singleCityRestaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (singleCityRestaurants) {
      const uniqueRestaurantsMap = new Map();
      singleCityRestaurants.forEach((res) => {
        uniqueRestaurantsMap.set(res.info.id, res);
      });

      const uniqueRestaurants = Array.from(uniqueRestaurantsMap.values());

      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurant(uniqueRestaurants);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <div>
        <h1>Looks like You are Offline. Check Connection</h1>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter flex items-center m-1 p-4">
        <div className="flex items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const filtered = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            <input
              type="text"
              data-testid = "SearchInputBox"
              className="border px-3 py-3 border-solid border-black h-8"
              value={searchTxt}
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
            />
            <button
              aria-label="Search"
              type="submit"
              className="px-4 py-4 bg-green-200 m-2  hover:bg-green-300 m-2 cursor-pointer rounded-full shadow-md"
            >
              <FaSearch />
            </button>
          </form>

          <button
            className="px-4 py-2 bg-green-200 hover:bg-green-300 m-2 cursor-pointer rounded-md shadow-md"
            onClick={() => {
              const filteredlist = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>

          <div className="flex items-center ml-2">
            <label>UserName:</label>
            <input
              className="border border-black p-2 ml-1"
              value={tempUserName}
              onChange={(e) => setTempUserName(e.target.value)}
            />
            <button
              className="px-3 py-3 bg-green-200 m-2 cursor-pointer rounded-full flex justify-center items-center  hover:bg-green-300 m-2 shadow-md"
              onClick={() => setUserName(tempUserName)}
            >
              Login <FaArrowAltCircleRight className="ml-2 " />
            </button>
          </div>
        </div>

        <div className="ml-auto">
          <button
            onClick={() => setUserName("")}
            className="px-4 py-4 bg-green-200 m-2 cursor-pointer rounded-full flex items-center  hover:bg-green-300 m-2 shadow-md"
          >
            LogOut
          </button>
        </div>
      </div>

      <div className="res-container flex justify-center flex-wrap">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => {
            const discountInfo = restaurant.info.aggregatedDiscountInfoV3;
            const hasDiscount = discountInfo?.header || discountInfo?.subHeader;

            const RestaurantCardComponent = hasDiscount
              ? ResCardDiscount
              : RestaurantCard;

            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <RestaurantCardComponent resData={restaurant.info} />
              </Link>
            );
          })
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
