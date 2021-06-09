import './App.css';
import Favorites from "./components/Favorites"
import Form from "./components/Form"
import Playlist from "./components/Playlist"

import { useState, useEffect} from "react"
import {Route, Switch , Link} from "react-router-dom"

function App(props) {

  const url = "https://seir-329-tunr-wt.herokuapp.com/songs/"

  const [posts, setPosts] = useState([])
  const nullSong = {
    title: "",
    artist: "",
    time: ""
  }

  const [targetSong, setTargetSong] = useState(nullSong)

  const getSongs = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  const addSongs = async (newSong) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newSong)
    })
    getSongs()
  }

  const getTargetSong = (song) => {
    setTargetSong(song)
  }
  const updateSong = async (song) => {
    await fetch(url + song.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(song)
    })
    getSongs()
  }

  const deleteSong = async (song) => {
    await fetch(url + song.id, {
      method: "delete"
    })
    getSongs()
  }

  const [favSongs, setFavSongs] = useState([])

  const handleFavorite = (song) => {
    setFavSongs([...favSongs, song]);
  
  }

  useEffect(() => {getSongs()}, [])

  return (
    <div className="App">
      <h1>TUNR.</h1>
      <p>FOR ALL YOUR PLAYLIST NEEDS</p>
      <Playlist
        posts={posts}
        favoriteSong={handleFavorite}
        edit={getTargetSong}
        update={updateSong}
        deleteSong={deleteSong}
      />
      <Favorites
      favorites={favSongs}
      posts={posts}
      favoriteSong={handleFavorite}
      edit={getTargetSong}
      deleteSong={deleteSong}
      />
      <Form
        initialSong={nullSong}
        handleSubmit={addSongs}
      />
     
    </div>
  );
}

export default App;
