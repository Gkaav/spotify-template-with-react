import React from "react";
import "./LibraryCard.css";

import LibraryImage from '../../assets/YourLibrary.svg';

const LibraryCard = () => {

  const items = [
    { title: "Your Library", img: LibraryImage },
  ];

  const classes = "libraryCard"
  const text = "libraryText";


  return (
    <div className={classes}>
      {items.map((item, index) => (
        <div key={index} className="libraryItems">
          <img src={item.img} alt={item.title} />
          <div className={text}>{item.title}</div>
        </div>
      ))}
    </div>
  );
};


export default LibraryCard;