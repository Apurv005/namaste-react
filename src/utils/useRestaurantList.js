import { useEffect, useState } from "react";

const useRestaurantList = () => {
  let [resData, setResData] = useState([]);
  const [filteredData, setFilterData] = useState(null);
  let reData = [];

  useEffect(() => {
    updateCard();
  }, []);

  async function updateCard() {
    const restData = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );

    let data = await restData.json();

    for (let i = 3; i < data.data.cards.length; i++) {
      reData.push(data.data.cards[i].card.card);
    }
    setResData(reData);
    setFilterData(reData);
  }

  return { resData, filteredData, setResData, setFilterData };
};

export default useRestaurantList;
