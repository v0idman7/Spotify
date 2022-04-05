import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./FavoriteTracks.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const FavoriteTracks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOAD_TRACKS" });
  }, [dispatch]);

  const { favoriteTracks } = useTypedSelector((state) => state.favorite);

  const handleClick = useCallback(
    (num: number) => {
      dispatch({
        type: "PLAY_TRACK",
        payload: {
          track: num,
          playlist: favoriteTracks!.items.map((one) => one.track),
        },
      });
    },
    [favoriteTracks]
  );

  return (
    favoriteTracks && (
      <div className="mainPage__section">
        <h2 className="mainPage__sectionName">Любимые Треки</h2>
        <ul className="mainPage__list albumsList">
          {favoriteTracks.items.map((item, indx) => (
            <li
              className="albumsList__item albumItem"
              key={item.track.id}
              onClick={() => handleClick(indx)}
            >
              <img
                className="albumItem__poster"
                src={item.track.album.images[0].url}
                alt="poster"
              />
              <h3 className="albumItem__name">{item.track.name}</h3>
              <p className="albumItem__description">{`${item.track.artists
                .map((one) => one.name)
                .join(", ")} - ${item.track.album.name}`}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default FavoriteTracks;
