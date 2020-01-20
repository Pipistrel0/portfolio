import React from "react";
import Typical from "react-typical";
import "./styles.css";

const Profile = () => {
  return (
    <div className="profile">
      <img
        className="img"
        src="https://cdnb.artstation.com/p/assets/images/images/020/297/651/large/phill-gonzales-pipistrello-01.jpg?1567203278"
        alt="pipistrelo"
      />
      <h1 className="text1">Hola, Soy Gianluca Ciccarelli</h1>
      <div className="textContainer">
        <div className="text2">
          <p>
            Soy un{" "}
            <Typical
              steps={["desarrollador.", 2000, "estudiante.", 2000]}
              loop={Infinity}
              wrapper="b"
              className="typical"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
