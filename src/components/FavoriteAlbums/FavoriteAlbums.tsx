import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./FavoriteAlbums.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FavoriteAlbums = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_ALBUMS" });
  }, [dispatch]);

  const { favoriteAlbums } = useTypedSelector((state) => state.favorite);

  return (
    favoriteAlbums && (
      <div className="mainPage__section">
        <h2 className="mainPage__sectionName">Любимые Альбомы</h2>
        <ul className="mainPage__list albumsList">
          {favoriteAlbums.items.map((item) => (
            <li className="albumsList__item albumItem" key={item.album.id}>
              <Link className="albumItem__link" to={`/Album/${item.album.id}`}>
                <img
                  className="albumItem__poster"
                  src={item.album.images[0].url}
                  alt="poster"
                />
                <h3 className="albumItem__name">{item.album.name}</h3>
                <p className="albumItem__description">{`${item.album.artists
                  .map((one) => one.name)
                  .join(", ")}`}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default FavoriteAlbums;
