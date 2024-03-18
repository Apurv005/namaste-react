import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import Logo from "./images/logo.png";

// Episode 01:

//  This below code is core react -> we never use this -> JSX is there to help us -> Okay don't worry Be Happy :) -

// const heading = React.createElement("h1", {
//     id : "h1heading"
// }, "Hello World From React I live in Gandhinagar!");

// // array of the children:
// const aboveSubheading = React.createElement("div",{id:"subHeading"},[heading,React.createElement("h2",{},"I am h2 tag!")]);

// const aboveHeading = React.createElement("div",{id:"heading"},aboveSubheading);

// console.log(aboveHeading); // This is react object
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(aboveHeading); // This will convert react object to DOM thats browser understand

// Episode 03:

// Core React Element:
// React.CreateElement => ReactElement - Js Object => HtmlElement(render)
// const heading = React.createElement("h1", {
//     id : "h1heading"
// }, "Hello world from core react!");

// // JSX (transpiled before it reaches to JS Engine) : Parcel - Babel
// // jsx => React.CreateElement => ReactElement - Js Object => HtmlElement(render)
// // This jsx => React.CreateElement is done by Babel.

// const jsxHeading = ( <h1 id="heading"> Hello world from JSX </h1> );
// Here heading and jsxHeading both are the same.

// Functional Componentes:

// const Title = () => <h1>Tital Component</h1>
// const reactElement = <h2>Hello i am react element !</h2>

// // component name must be capitalized
// const HeadingComponent = () => (
//     <div id="container">
//         {/* when we use this {} in jsx then we can execute any js code inside it. and when we want to use react element also we can get this by {}*/}
//         {reactElement}
//         {/* This is component composition : One component is in another one */}
//         <Title></Title>
//         <Title/>
//         {/* we can also call Title() function as it is a js function at the end of the day. */}
//         {Title()}
//         <h1>Hello from functional component</h1>
//     </div>
//     );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(jsxHeading);

// // This is how we are going to render components in react;
// root.render(<HeadingComponent/>)

// Assignment 03:

// const Header = () => {
//     return (<div className="navBar">
//         <img className="logo" src={Logo} alt="logo"/>
//         <form>
//             <input type="text"></input>
//             <button>Submit</button>
//         </form>
//         <img className="userImage" src={Logo} alt="logo"/>
//     </div>)
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header/>);

// Episode 04:

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

// This is called - Chunking, lazy loading, dynamic import, code spliting
const About = lazy(() => import("./components/About"));

const App = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const data = { name: "Ap" };
    setName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ name, setName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
