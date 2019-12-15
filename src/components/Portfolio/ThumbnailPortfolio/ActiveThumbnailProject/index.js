import React from "react";
import "./styles.css";

class ActiveThumbnailProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeThumbnail: this.props.activeThumbnail };
    console.log(this.props.activeThumbnail);
  }

  render() {
    return (
      <div className="active-thumbnail-project">
        <img
          src={this.props.activeThumbnail}
          alt="activeThumbnail"
          className="active-thumbnail"
        ></img>
      </div>
    );
  }
}

export default ActiveThumbnailProject;
