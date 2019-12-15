import React from "react";
import "./styles.css";

const ActiveThumbnailProject = ({ activeThumbnail }) => {
  console.log({ activeThumbnail });
  return (
    <div className="active-thumbnail-project">
      <img
        src={activeThumbnail}
        alt="activeThumbnail"
        className="active-thumbnail"
      ></img>
    </div>
  );
};

export default ActiveThumbnailProject;
