import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCKDATA from "../mocks/restaurantListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKDATA);
    },
  });
});

it("Should search the rest list with the samosa input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInp = screen.getByTestId("searchInp");

  fireEvent.change(searchInp, { target: { value: "samosa" } });

  fireEvent.click(searchBtn);

  const restodiv = screen.getAllByTestId("restodiv");

  expect(restodiv).toHaveLength(1);

  // expect(searchBtn).toBeInTheDocument();
});

it("Should display the high rated restaurant when clicks on button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const HRRB = screen.getByTestId("highRatedRestoBtn");

  fireEvent.click(HRRB);

  const restodiv = screen.getAllByTestId("restodiv");

  expect(restodiv).toHaveLength(5);

  // expect(searchBtn).toBeInTheDocument();
});
