import React from "react";
import Typical from "react-typical";
import "./styles.css";

const Profile = () => {
  return (
    <div className="wrapper">
      <Typical
        steps={["Hello", 1000, "Hello world!", 500]}
        loop={Infinity}
        wrapper="b"
        className="typical"
      />
    </div>
  );
};

export default Profile;
