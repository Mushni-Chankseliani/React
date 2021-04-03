import { Fragment, useState } from "react";
import "./themes.css";

const ColorThemes = ({ counterValue = 0 }) => {
  const [chosenClass, setChosenClass] = useState('color-red');

  return (
    <Fragment>
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn boxes color-red"
          onClick={() => setChosenClass("color-red")}
        ></button>
        <button
          className="btn boxes color-green"
          onClick={() => setChosenClass("color-green")}
        ></button>
        <button
          className="btn boxes color-blue"
          onClick={() => setChosenClass("color-blue")}
        ></button>
        <button
          className="btn boxes color-black"
          onClick={() => setChosenClass("color-black")}
        ></button>
        <button
          className="btn boxes color-brown"
          onClick={() => setChosenClass("color-brown")}
        ></button>
        <button
          className="btn boxes color-grey"
          onClick={() => setChosenClass("color-grey")}
        ></button>
        <button
          className="btn boxes color-yellow"
          onClick={() => setChosenClass("color-yellow")}
        ></button>
        <button
          className="btn boxes color-aqua"
          onClick={() => setChosenClass("color-aqua")}
        ></button>
        <button
          className="btn boxes color-purple"
          onClick={() => setChosenClass("color-purple")}
        ></button>
      </div>

      <div className={chosenClass}>
        <h1>{counterValue}</h1>
      </div>
    </Fragment>
  );
};

export default ColorThemes;
