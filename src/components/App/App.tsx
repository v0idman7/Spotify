import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import "./App.scss";
import { getAuthorizeUrl, getDataFromHash } from "../../services/auth";
import { useActions } from "../../hooks/useActions";
import Header from "../Header/Header";
import FavoriteTracks from "../FavoriteTracks/FavoriteTracks";
import FavoriteAlbums from "../FavoriteAlbums/FavoriteAlbums";
import MainPage from "../MainPage/MainPage";
import Player from "../Player/Player";
import AlbumPage from "../AlbumPage/AlbumPage";
import PlaylistPage from "../PlaylistPage/PlaylistPage";

function App() {
  const navigate = useNavigate();
  const { hash } = useLocation();
  if (hash) {
    const data = getDataFromHash(hash);
    localStorage.setItem(
      "Authorization",
      `${data.token_type} ${data.access_token}`
    );
  }
  const { fetchUsers } = useActions();

  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      window.location.href = getAuthorizeUrl();
    } else if (hash) {
      navigate("/");
      fetchUsers();
    }
  }, [fetchUsers, hash, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Player />
          </>
        }
      >
        <Route index element={<MainPage />} />
        <Route path="/Tracks" element={<FavoriteTracks />} />
        <Route path="/Albums" element={<FavoriteAlbums />} />
        <Route path="/Album/:id" element={<AlbumPage />} />
        <Route path="/Playlist/:id" element={<PlaylistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
