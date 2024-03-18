import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
const { Provider } = require("react-redux");
const { default: appStore } = require("../utils/appStore");
const { BrowserRouter } = require("react-router-dom");
import "@testing-library/jest-dom";

it("wheather the header is loaded with the login button", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByText("Home");
  expect(loginBtn).toBeInTheDocument();
});

it("Should change login button to logout when clicks", async () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
