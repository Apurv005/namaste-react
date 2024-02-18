/* 
    <div id="heading">
        <div id="subHeading">
            <h1>
            </h1>
        </div>
    </div>
*/


//  This below code is core react -> we never use this -> JSX is there to help us -> Okay don't worry Be Happy :) -

const heading = React.createElement("h1", {
    id : "h1heading"
}, "Hello World From React!");

// array of the children:
const aboveSubheading = React.createElement("div",{id:"subHeading"},[heading,React.createElement("h2",{},"I am h2 tag!")]);

const aboveHeading = React.createElement("div",{id:"heading"},aboveSubheading);

console.log(aboveHeading); // This is react object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(aboveHeading); // This will convert react object to DOM thats browser understand