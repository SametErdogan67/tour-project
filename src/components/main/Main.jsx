import React from "react";
import { data } from "../../helper/data";
import Cards from "../cards/Cards";
import "./Main.css";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <Cards {...item} />
      ))}
    </div>
  );
};

export default Main;
