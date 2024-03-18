import { useState } from "react";
import MenuItem from "./MenuItem";

const ItemCard = (props) => {
  // console.log(props);
  const titel = props.menu.card.card.title;
  const { itemCards } = props.menu.card.card;
  const { itemStatus } = props;
  const { showItem } = props;
  return (
    <div className="flex flex-col w-11/12 p-2">
      <div
        className="flex justify-between cursor-pointer border-b-2 border-gray-400"
        onClick={() => {
          showItem();
        }}
      >
        <p className="text-xl text-blue-600 my-2">{titel}</p>
        <span>👇</span>
      </div>
      <div>{itemStatus && <MenuItem items={itemCards} />}</div>
    </div>
  );
};

export default ItemCard;
