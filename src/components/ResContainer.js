import ResCards from "./ResCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const ResContainer = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filList, setFilList] = useState([]);
  const [searchText, setSearchText] = useState([]);
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
  //CONDITIONAL RENDERING
  // console.log("After UseEffect");
  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      <div className="filter">
        <div className="search-container">
          <input
            className="input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search"
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
          className="filter-btn"
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
      <div className="resCard-container">
        {/* ResCards */}
        {filList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ResContainer;
