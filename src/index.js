import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img height="200px" src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Ghalls"
      img="https://www.mypokecard.com/my/galery/UdBgoQfQ7ro7.jpg"
      phone="+123 654 789"
      email="ghalls@cool.com"
    />
  </div>,
  document.getElementById("root")
);
