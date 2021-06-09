import React from "react";
import Song from "./Song"
const Playlist = (props) => {
  const pList = props.posts.map((post) => <Song post={post} deleteSong={props.deleteSong} update={props.updateSong} favoriteSong={props.favoriteSong} key={post.id}/>)
  return (
  <div className="playlist">
  <h1>Playlist 1</h1>,
    {pList}
  </div>
  )
};
export default Playlist;