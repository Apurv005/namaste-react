import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  promotedRestaurant,
} from "../components/RestaurantCard";
import MOCKDATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

it("Should load the component with props", () => {
  render(<RestaurantCard resData={MOCKDATA} />);
  const data = screen.getByText("Gita Samosa Centre");

  expect(data).toBeInTheDocument();
});

const PromotedRestaurantCard = promotedRestaurant(RestaurantCard);
test("Should loaded with promoted label", () => {
  const { getByText } = render(<PromotedRestaurantCard resData={MOCKDATA} />);

  const data = getByText("Promoted");
  expect(data).toBeInTheDocument();
});
