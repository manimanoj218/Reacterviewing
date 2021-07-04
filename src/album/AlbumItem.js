import React from "react";
import placeholder from "./placeholder.svg";
import "./AlbumItem.css";

const AlbumItem = ({ album }) => (
  <li className="album-item">
    <img src={album.url ? album.url : placeholder}></img>
    <h3>{album.title}</h3>
  </li>
);

export default AlbumItem;
