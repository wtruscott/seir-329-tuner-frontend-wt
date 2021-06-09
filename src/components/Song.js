import React from "react";

const Song = ({post, deleteSong, favoriteSong}) => {
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
    const button = {
        textAlign: "center",
        color: "red",
        fontWeight: "900",
        width: "20px",
        marginLeft: "30px",
      };
    const addfav = {
        width: "100px",
        textAlign: "center",
        justifySelf: "right"
    }

      return (
        <div style={div}>
            <h1 style={title}>{post.title}</h1>
            <h2 style={artist}>{post.artist}<span style={button} onClick={() => deleteSong(post)}>X</span></h2>
            <h2 style={time}>{post.time}</h2>
            <button style= {addfav} onClick={() => favoriteSong(post)}>Favorite</button>
            
        </div>
      );
    };
    
    export default Song;