import React from "react";
import "./NavBarCard.css";

import HomeImage from '../../assets/Home.svg';
import SearchImage from '../../assets/Search.svg'

const NavBarCard = () => {

  const items = [
    { title: "Home", img: HomeImage },
    { title: "Search", img: SearchImage },
  ];

  const classes = "navbar"
  const text = "navbarText";


  return (
    <div className={classes}>
      {items.map((item, index) => (
        <div key={index} className="navbarItems">
          <img src={item.img} alt={item.title} />
          <div className={text}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};


export default NavBarCard;

