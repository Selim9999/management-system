import React from "react";
import "./timeline.css";

const Timeline = ({ item }) => {
  let classes;
  let startDate = 10;
  let endDate = 17;
  let today = new Date();
  if (today.getDate() + 1 === endDate) {
    classes = "progrss-bar bg-warning";
  } else if (today.getDate() > endDate) {
    classes = "progress-bar bg-danger";
  } else {
    classes = "progress-bar bg-success";
  }
  let widthMath = ((today.getDate() - startDate) / (endDate - startDate)) * 100;

  return (
    <div>
      <h1>Task {item.id} timeline</h1>
      <br />
      <div className="progress">
        <div
          className={classes}
          role="progressbar"
          aria-label="timeline"
          style={{ width: widthMath + "%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          days passed
        </div>
      </div>
      <div class="start">{item.start_date}</div>
      <div class="end">{item.end_date}</div>
      <br></br>
      <br />
      <div>
        <h4>Task Detailed description :</h4>
        <p>
          {item.description}
          <br />
          Time Remaining: 3 days <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default Timeline;
