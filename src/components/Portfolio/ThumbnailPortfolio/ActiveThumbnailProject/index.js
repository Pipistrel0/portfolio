import React from "react";
import "./styles.css";

class ActiveThumbnailProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeThumbnail: this.props.activeThumbnail };
  }

  render() {
    return (
      <div className="active-thumbnail-project">
        {this.props.activeThumbnail ? (
          <img
            src={this.props.activeThumbnail}
            alt="activeThumbnail"
            className="active-thumbnail"
          ></img>
        ) : (
          <h3 className="sub">estos son los portafolios en los que trabaje</h3>
        )}
      </div>
    );
  }
}

export default ActiveThumbnailProject;
