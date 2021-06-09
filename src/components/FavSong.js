import React from "react";

const FavSong = ({favorite, deleteSong}) => {
    //Style Object
    const div = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr",
        margin: "10px auto",
        width: "80%",
      };
    const title = {
        color: "blue",
        justifySelf: "left"
    };
    const artist = {
        justifySelf: "right"
    }
    const time = {
        justifySelf: "left"
    }

      return (
        <div style={div}>
            <h1 style={title}>{favorite.title}</h1>
            <h2 style={artist}>{favorite.artist}</h2>
            <h2 style={time}>{favorite.time}</h2>
        </div>
      );
    };
    
    export default FavSong;