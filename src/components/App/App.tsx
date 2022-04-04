import "./App.scss";
import { getAuthorizeUrl, getDataFromHash } from "../../services/auth";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import Header from "../Header/Header";
import FavoriteTracks from "../FavoriteTracks/FavoriteTracks";
import FavoriteAlbums from "../FavoriteAlbums/FavoriteAlbums";
import MainPage from "../MainPage/MainPage";
import Player from "../Player/Player";
import AlbumPage from "../AlbumPage/AlbumPage";

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
  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      window.location.href = getAuthorizeUrl();
    } else if (hash) {
      navigate("/");
      fetchUsers();
    }
  }, []);

  const user = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  console.log(user);

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
        <Route path="/Playlist/:id" element={<AlbumPage playlist />} />
      </Route>
    </Routes>
  );
}

export default App;
