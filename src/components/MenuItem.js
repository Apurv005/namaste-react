import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const MenuItem = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  return (
    <div>
      {items.map((elem) => (
        <div className="flex my-5 border-gray-400 border-b-2 min-h-28 justify-between">
          <div className="w-9/12">
            <div>
              <h3>{elem?.card?.info?.name}</h3>
              <p>
                {elem?.card?.info?.defaultPrice
                  ? elem?.card?.info?.defaultPrice / 100
                  : elem?.card?.info?.price / 100}{" "}
                ₹
              </p>
            </div>
            <div>
              <p>{elem?.card?.info?.description}</p>
            </div>
            <button
              className="p-2 border border-black my-2 bg-gray-400"
              onClick={() => {
                dispatch(addItem(elem));
              }}
            >
              Add
            </button>
          </div>
          {elem?.card?.info?.imageId && (
            <div className="w-3/12 flex justify-center items-center">
              <img
                className="w-24 h-auto rounded-lg"
                src={CDN_URL + elem?.card?.info?.imageId}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default MenuItem;
