import { resUrl } from "../utils/constants";
const ResCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, locality, areaName } =
    resData?.info;
  return (
    <div className="res-cards">
      <img src={resUrl + resData.info.cloudinaryImageId}></img>
      <h2 className="res-info">{name}</h2>
      <h4 className="res-info">{cuisines.join(",")}</h4>
      <h4 className="res-info">{avgRating} stars</h4>
      <h4 className="res-info">{costForTwo}</h4>
      <h4 className="res-info">{locality}</h4>
      <h4 className="res-info">{areaName}</h4>
    </div>
  );
};

export default ResCards;
