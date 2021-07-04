import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import "./App.css";

const App = () => {
  const [albumsList, setAlbumList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        let modifiedData = data.map((album) => {
          return {
            ...album,
            title: album.title.replaceAll(/e/gi, ""),
          };
        });
        setAlbumList(modifiedData);
      });
  }, []);

  return (
    <div className="albums-app">
      <h1>React Interview Challenge</h1>
      <AlbumList albums={albumsList} />
    </div>
  );
};

export default hot(module)(App);
