import React from "react";
import ActiveThumbnailProject from "./ActiveThumbnailProject";
import ProjectsGrid from "./ProjectsGrid";
import "./styles.css";
import utn from "../../../images/1.jpg";
const wtf = { utn };
console.log(wtf);
class ThumbnailPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: { utn } };
  }
  handleClick = e => {
    const newImage = e.target.getAttribute("src");
    console.log("around-sm");
    this.setState({ image: newImage });
  };
  render() {
    return (
      <div className="thumbnail-portfolio">
        <div style={{ flex: 1 }}>
          <ActiveThumbnailProject activeThumbnail={this.image} />
          <ProjectsGrid handleClick={this.handleClick} />
        </div>
        <div style={{ flex: 1 }}>Izquierda</div>
      </div>
    );
  }
}

export default ThumbnailPortfolio;
