import { useParams } from "react-router-dom";
import useRestaurantMenuCard from "../utils/useRestaurantMenu";
import ItemCard from "./ItemCard";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const restMenu = useRestaurantMenuCard(resid);
  const [itemIndex, setItemIndex] = useState(0);

  if (restMenu == null) return <h1>Loading...</h1>;

  let { name } = restMenu?.cards[0]?.card?.card?.info;

  let itemCards =
    restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(itemCards);

  return (
    <div className="flex justify-center">
      <div className="border border-1 border-black w-6/12 h-auto mt-5">
        <h1 className="text-xl text-center font-bold my-4"> {name} </h1>

        <h2 className="my-3 px-6 font-bold text-center">Menu</h2>
        <ul className="px-2">
          {itemCards.map((elem, index) => (
            <li className="flex justify-center" key={elem?.card?.info?.id}>
              <ItemCard
                menu={elem}
                itemStatus={index === itemIndex ? true : false}
                showItem={() =>
                  index !== itemIndex ? setItemIndex(index) : setItemIndex(null)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
