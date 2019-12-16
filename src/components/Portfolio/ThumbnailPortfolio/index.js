import React from "react";
import ActiveThumbnailProject from "./ActiveThumbnailProject";
import ProjectsGrid from "./ProjectsGrid";
import ActiveText from "./ActiveText";
import "./styles.css";

class ThumbnailPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: null, texto: <h1>Projects</h1> };
  }

  handleClick = e => {
    const newImage = e.target.getAttribute("src");
    this.setState({ image: newImage });
    this.setState({ texto: e.target.getAttribute("src") });
  };
  render() {
    return (
      <div className="thumbnail-portfolio">
        <div className="left">
          <ActiveThumbnailProject activeThumbnail={this.state.image} />
          <ProjectsGrid handleClick={this.handleClick} />
        </div>
        <div className="right">
          <ActiveText activeText={this.state.texto} />
        </div>
      </div>
    );
  }
}

export default ThumbnailPortfolio;
