import ResCards from "./ResCards";
import resList from "../utils/mockData";
import { useState } from "react";

const ResContainer = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="res-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredresList = listOfRes.filter(
              (res) => res.info.avgRating>4

            );
            console.log("Before filtering:", listOfRes.length);
            console.log("After filtering:", filteredresList.length);
            setListOfRes(filteredresList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="resCard-container">
        {/* ResCards */}
        {listOfRes.map((resturant) => (
          <ResCards key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default ResContainer;
