import React from "react";
import FavSong from "./FavSong"
const Favorites = (props) => {
  const faves = props.favorites.map((favorite) => <FavSong favorite={favorite} deleteSong={props.deleteSong} key={favorite.id}/>)
  return (
  <div className= "favorites">
    <h1>Favorite Songs List</h1>,
    {faves}
  </div>
  )
};
export default Favorites;