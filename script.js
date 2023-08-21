//Hello from JavaScript

// const heading=document.createElement("h1");
// heading.innerHTML="Hello from JavaSript";
// const root=document.getElementById("root");
// //this will put heading inside the root.
// root.appendChild(heading);

//Hello from React
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from ReactJS"
// );
// console.log(heading); //returns an object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //will convert react element(object) into browser understandable HTML element and places the same into the DOM
// root.render(heading);

//Nested HTML ELEMENT

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    //array of children
    React.createElement("h1", { id: "heading" }, "Hello World from ReactJS"),
    React.createElement("h2", { id: "heading2" }, "Hello World from ReactJS"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
//will convert react element(object) into browser understandable HTML element and places the same into the DOM
root.render(parent);
