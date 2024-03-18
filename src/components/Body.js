import RestaurantCard, { promotedRestaurant } from "./RestaurantCard";
import { restoData } from "../utils/mokeData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import userContext from "../utils/userContext";

const Body = () => {
  const [searchVal, setSearchVal] = useState("");
  const { resData, filteredData, setFilterData, setResData } =
    useRestaurantList();
  const checkOnline = useOnlineStatus();

  const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);

  const { name, setName } = useContext(userContext);

  if (resData.length === 0) {
    return <Shimmer />;
  }
  if (checkOnline === false) {
    return <h1>You are offline !!!</h1>;
  }

  return (
    <div className="">
      <div className="searchBar" style={{ margin: "10px" }}>
        <input
          type="text"
          className="border border-black border-1 px-1 py-2 mx-2"
          data-testid="searchInp"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-2 border border-black bg-gray-50 hover:bg-gray-300"
          onClick={async () => {
            let input = searchVal.toLowerCase();
            let filter = resData.filter((data) =>
              data.info.name.toLowerCase().includes(input)
            );
            setFilterData(filter);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 border border-black bg-gray-50 hover:bg-gray-300"
          style={{ margin: "10px" }}
          data-testid="highRatedRestoBtn"
          onClick={() => {
            let filterdata = resData.filter((data) => data.info.avgRating > 4);
            setFilterData(filterdata);
          }}
        >
          {" "}
          High Rated Restaurant{" "}
        </button>
        <input
          type="text"
          className="border border-black border-1 px-1 py-2 mx-2
          "
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((res) => (
          <Link
            className="m-3 bg-gray-200 hover:bg-[#78A083] rounded-xl"
            key={res.info.id}
            to={`restaurant/${res.info.id}`}
          >
            {res.info.promoted ? (
              <PromotedRestaurantCard resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
