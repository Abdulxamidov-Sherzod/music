import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryToggle, setLibraryToggle }) => {
  return (
    <nav>
      <h1>Musics</h1>
      <button onClick={() => setLibraryToggle(!libraryToggle)}>
        Library &nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
