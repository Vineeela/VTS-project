import React from "react";
import { render } from "react-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./progress.css";

const percentage = 52;

const Progressbar = () => (
  <div>
    <div className="crcl">
      <CircularProgressbar percentage={percentage} text={`${percentage}%`} />
    </div>
  </div>
);

render(<Progressbar />, document.getElementById("root"));

export default Progressbar;
