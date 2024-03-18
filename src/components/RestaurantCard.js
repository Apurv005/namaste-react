import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  let { resData } = props;
  let name = resData.info.name;
  let rating = resData.info.avgRating;
  let deliveryTime = resData.info.sla.deliveryTime;
  let price = resData.info.costForTwo;
  let cuisines = resData.info.cuisines;
  let image = resData.info.cloudinaryImageId;
  let id = resData?.info?.id;
  const data = useContext(userContext);

  return (
    <div className="flex flex-col w-64 h-96 " data-testid="restodiv">
      <div className="h-44 flex items-center justify-center">
        <img
          src={CDN_URL + image}
          alt="mcdonalds-img"
          className="h-36 w-56 border border-1 rounded-xl"
        ></img>
      </div>
      <div className="flex items-center justify-center flex-col w-64">
        <div className="w-56">
          <h3>{name}</h3>
          <h4>{rating} Stars</h4>
          <h4>{deliveryTime} Mins</h4>
          <h4>{price}</h4>
          <h4>{cuisines.join(", ")}</h4>
          <h2>{data.name}</h2>
        </div>
      </div>
    </div>
  );
};

export const promotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg m-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
