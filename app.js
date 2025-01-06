import React from "react";
import ReactDOM from "react-dom/client";

// method 3 what if the code is complex 

const heading = React.createElement(
    "div", //Which tag to be created?
    {id : "parent"}, //attributes
    React.createElement("div", {id : "child"}, 
    [React.createElement("h1", {id : "child1"}, "no need to rfresh automatcially change"),
    React.createElement("h2", {id : "child2"}, "this is done by parcel")])
);//what to display?

//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

