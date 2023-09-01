import { resUrl } from "../utils/constants";
const ResCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, locality, areaName } =
    resData?.info;
  return (
    <div className="res-cards m-4 p-4 w-[300px] h-[550px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img className="h-[50%] w-[100%]" src={resUrl + resData.info.cloudinaryImageId}></img>
      <h2 className="res-info font-bold py-2 text-lg">{name}</h2>
      <h4 className="res-info overflow-hidden">{cuisines.join(",")}</h4>
      <h4 className="res-info">{avgRating} stars</h4>
      <h4 className="res-info">{costForTwo}</h4>
      <h4 className="res-info">{locality}</h4>
      <h4 className="res-info">{areaName}</h4>
    </div>
  );
};

//Higher Order Components

export const withPromptedLabel=(ResCards)=>{
  return(props)=>{
    return(
      <div>
        <label>Promoted</label>
        <ResCards {...props}/>
      </div>
    );
  };
};

export default ResCards;
