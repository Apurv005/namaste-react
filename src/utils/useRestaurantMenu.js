import { SwiggyRestaurantApi } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenuCard = (resid) => {
  const [restMenu, setRestMenu] = useState(null);

  useEffect(() => {
    getDataFromSwiggi();
  }, []);

  async function getDataFromSwiggi() {
    const api = await fetch(SwiggyRestaurantApi + resid);

    const data = await api.json();
    const info = data?.data;
    setRestMenu(info);
  }

  return restMenu;
};
export default useRestaurantMenuCard;
