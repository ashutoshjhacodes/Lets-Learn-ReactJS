import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResContainer from "./components/ResContainer";

const AppLayOut = () => {
  return (
    <div className="applayout">
      <Header />
      <ResContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
