import React from "react";

import './Library.css'
import LibraryCard from "../UI/LibraryCard";
import LibraryBtn from "../UI/LibraryBtn";
import LibraryCategories from "../UI/LibraryCategories";
import LibraryImg from "../UI/LibraryImg";


const Library = () => {
  return (
    <div className="library">
          <div className= 'librarycard'>
            <LibraryCard/>
            <LibraryBtn/>
          </div>
          <LibraryCategories/>
          <LibraryImg/>
      </div>
  );
};

export default Library;
