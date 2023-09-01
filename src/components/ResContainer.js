import ResCards, { withPromptedLabel } from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const ResContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filList, setFilList] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const RestaurantMenuPromoted = withPromptedLabel(ResCards);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    console.log(json);
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onLinestatus = useOnlineStatus();
  if (onLinestatus === false)
    return (
      <h1>
        Look like you are offline !! Please check your internet connection.
      </h1>
    );

  //CONDITIONAL RENDERING
  // console.log("After UseEffect");
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <div className="filter flex ">
        <div className="search-container m-4 p-4 flex">
          <input
            className="input border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search px-4 py-1 bg-green-200 m-2 rounded-lg "
            onClick={() => {
              //filter on the basis of search
              fil = listOfRes.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log({ searchText });
              setFilList(fil);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-gray-200 px-2 py-2 m-8 rounded-lg "
          onClick={() => {
            const filteredresList = listOfRes.filter(
              (res) => res?.data?.avgRating > 4
            );
            console.log("Before filtering:", listOfRes.length);
            console.log("After filtering:", filteredresList.length);
            setFilList(filteredresList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resCard-container flex flex-wrap px-2 m-16">
        {/* ResCards */}
        {filList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantMenuPromoted resData={restaurant}/>
            ) : (
              <ResCards resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ResContainer;
