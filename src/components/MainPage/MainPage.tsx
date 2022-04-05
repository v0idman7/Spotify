import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./MainPage.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SearchPanel from "../SearchPanel/SearchPanel";

const MainPage = () => {
  const dispatch = useDispatch();
  const { albums, playlists } = useTypedSelector((state) => state.music);
  useEffect(() => {
    if (!albums || !playlists) dispatch({ type: "LOAD_DATA" });
  }, []);

  return (
    <div className="mainPage">
      <SearchPanel />
      {playlists && (
        <div className="mainPage__section">
          <h2 className="mainPage__sectionName">{playlists.message}</h2>
          <ul className="mainPage__list albumsList">
            {playlists.playlists.items.map((item) => (
              <li className="albumsList__item albumItem" key={item.id}>
                <Link className="albumItem__link" to={`/Playlist/${item.id}`}>
                  <img
                    className="albumItem__poster"
                    src={item.images[0].url}
                    alt="poster"
                  />
                  <h3 className="albumItem__name">{item.name}</h3>
                  <p className="albumItem__description">{item.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {albums && (
        <div className="mainPage__section">
          <h2 className="mainPage__sectionName">Новые Релизы</h2>
          <ul className="mainPage__list albumsList">
            {albums.albums.items.map((item) => (
              <li className="albumsList__item albumItem" key={item.id}>
                <Link className="albumItem__link" to={`/Album/${item.id}`}>
                  <img
                    className="albumItem__poster"
                    src={item.images[0].url}
                    alt="poster"
                  />
                  <h3 className="albumItem__name">{item.name}</h3>
                  <span className="albumItem__type">{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MainPage;
