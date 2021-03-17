import React from "react";
import LibrarySong from "./librarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  setLibraryToggle,
  libraryToggle,
}) => {
  return (
    <div className={`library ${libraryToggle ? "library-active" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
