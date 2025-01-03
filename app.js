//React.createElement is a JS Object
// method 1
// const heading = React.createElement(
//     "div", //Which element is to be created?
//     {id : "parent"}, //Setting attributes to the element created
//     React.createElement("div", {id : "child"}, 
//     //Siblings in an array
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     )
// );//what to display?
// console.log(heading)


// method 2

// const heading = React.createElement(
//     "div", //Which element is to be created?
//     {id : "parent"}, //Setting attributes to the element created
//     React.createElement("div", {id : "child"}, 
//     //Siblings in an array
//     [React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("h2", {}, "I'm a h2 tag")])
// );


// method 3 what if the code is complex 

const heading = React.createElement(
    "div", //Which element is to be created?
    {id : "parent"}, //Setting attributes to the element created
    React.createElement("div", {id : "child"}, 
    //Siblings in an array
    [React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag")]),
    React.createElement("div", {id : "child2"}, 
        //Siblings in an array
        [React.createElement("h1", {}, "I'm a h1 tag"),
        React.createElement("h2", {}, "I'm a h2 tag")])
); // to solve this we use jsx 











//Rendering react
const root = ReactDOM.createRoot(document.getElementById("root"));
// react element -> html tags 
/*
render() => renders a JS object(heading) and 
creates the element which the browser understands and puts it up in the DOM.
*/
root.render(heading);


// React.createElement(
//  1st argument => tag 
//  2nd and 3rd  => props 
//  3- children 
//  2- attribute 

// )

// 4 - 
// what if root tag has value already 
// new data will be replaced 


