import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "./PlaylistPage.scss";
import { getPlaylist } from "../../services/api";
import { OnePlaylistsType } from "../../types";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState<OnePlaylistsType | null>(null);

  const fetchPlaylist = async (id: string) => {
    const currentPlaylist = await getPlaylist(id);
    setPlaylist(currentPlaylist);
  };

  useEffect(() => {
    if (id) {
      fetchPlaylist(id);
    } else navigate("/");
  }, []);

  const handleClick = useCallback(
    (num: number) => {
      dispatch({
        type: "PLAY_TRACK",
        payload: {
          track: num,
          playlist: playlist!.tracks.items.map((one) => one.track),
        },
      });
    },
    [playlist]
  );

  return (
    playlist && (
      <div className="albumPage">
        <img
          className="albumPage__image"
          src={playlist.images[0].url}
          alt="poster"
        />
        <h2 className="albumPage__name">{playlist.name}</h2>
        <ul className="albumPage__list">
          {playlist.tracks.items.map((item, indx) => (
            <li
              className="albumPage__item"
              key={item.track.id}
              onClick={() => handleClick(indx)}
            >
              <span className="albumPage__trackNumber">{indx + 1}</span>
              <img
                className="albumPage__trackPoster"
                src={item.track.album.images[0].url}
                alt="poster"
              />
              <div className="albumPage__trackInfo">
                <h3 className="albumPage__trackName">{item.track.name}</h3>
                <h4 className="albumPage__trackArtist">
                  {item.track.artists.map((one) => one.name).join(", ")}
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default PlaylistPage;
