const heading3 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading4 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container1 = React.createElement(
  "div",
  {
    id: "container1",
  },
  [heading3, heading4]
);

console.log(heading4);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

//async defer
root1.render(container1);
