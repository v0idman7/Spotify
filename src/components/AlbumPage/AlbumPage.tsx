import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import "./AlbumPage.scss";
import { getAlbum } from "../../services/api";
import { AlbumType } from "../../types";

const AlbumPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState<AlbumType | null>(null);

  const fetchAlbum = async (id: string) => {
    const currentAlbum = await getAlbum(id);
    setAlbum(currentAlbum);
  };

  useEffect(() => {
    if (id) {
      fetchAlbum(id);
    } else navigate("/");
  }, []);

  const handleClick = (num: number) => {
    dispatch({
      type: "PLAY_TRACK",
      payload: {
        track: num,
        playlist: album!.tracks.items,
      },
    });
  };
  if (!album) return null;
  return (
    <div className="albumPage">
      <img
        className="albumPage__image"
        src={album.images[0].url}
        alt="poster"
      />
      <h2 className="albumPage__name">{album.name}</h2>
      <ul className="albumPage__list">
        {album.tracks.items.map((item, indx) => (
          <li
            className="albumPage__item"
            key={item.id}
            onClick={() => handleClick(indx)}
          >
            <span className="albumPage__trackNumber">{item.track_number}</span>
            <div className="albumPage__trackInfo">
              <h3 className="albumPage__trackName">{item.name}</h3>
              <h4 className="albumPage__trackArtist">
                {item.artists.map((one) => one.name).join(", ")}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumPage;
