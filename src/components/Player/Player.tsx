import { useCallback } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch } from "react-redux";

import "react-h5-audio-player/src/styles.scss";
import "./Player.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Player = () => {
  const dispatch = useDispatch();
  const { currentTrack, playlist } = useTypedSelector((state) => state.player);

  const handleNextClick = useCallback(() => {
    if (currentTrack! < playlist!.length - 1) dispatch({ type: "NEXT_TRACK" });
  }, [currentTrack, playlist]);

  const handlePreviousClick = useCallback(() => {
    if (currentTrack! > 0) dispatch({ type: "PREVIOS_TRACK" });
  }, [currentTrack]);

  return (
    playlist && (
      <div className="miniPlayer">
        <AudioPlayer
          src={playlist[currentTrack!].preview_url}
          showSkipControls
          onClickNext={handleNextClick}
          onClickPrevious={handlePreviousClick}
          autoPlayAfterSrcChange={false}
          header={
            <div className="playerHeader">
              <span className="playerHeader__name">
                {playlist[currentTrack!].name}
              </span>
              <span className="playerHeader__artist">
                {playlist[currentTrack!].artists
                  .map((one) => one.name)
                  .join(", ")}
              </span>
            </div>
          }
        />
      </div>
    )
  );
};

export default Player;
