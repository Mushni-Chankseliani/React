import { Fragment, useState } from "react";
import ColorThemes from "../color-themes/ColorThemes";

const Count = ({ value = 0 }) => {

  const [countValue, setCountValue] = useState(value);

  return (
    <Fragment>
      <ColorThemes counterValue={countValue} />

      <div className="row mb-3">
        <div className="col-6 d-flex justify-content-between">
          <button className="btn btn-primary" onClick={() => setCountValue(countValue + 1)}>Increase by 1</button>
          <button className="btn btn-primary" onClick={() => setCountValue(countValue + 5)}>Increase by 5</button>
          <button className="btn btn-primary" onClick={() => setCountValue(countValue + 100)}>Increase by 100</button>
        </div>
        <div className="col-6 d-flex justify-content-between">

          <button className="btn btn-info" onClick={() => setCountValue(countValue - 1)}>Decrease by 1</button>
          <button className="btn btn-info" onClick={() => setCountValue(countValue - 5)}>Decrease by 5</button>
          <button className="btn btn-info" onClick={() => setCountValue(countValue - 100)}>Decrease by 100</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Count;
