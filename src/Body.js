import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import "./Body.css";
import PauseIcon from "@material-ui/icons/Pause";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDataLayerValue } from "./StateProvider";
function Body({ spotify }) {
  const [
    { discover_weekly, playlist_item, playlists, playing },
    dispatch,
  ] = useDataLayerValue();
  //console.log(discover_weekly);
  //console.log(playlists);
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:album:5ht7ItJgpBH7W6vJ5BqpPr`,
        Authorization: `Bearer BQBf1mszZC4zHmRa_jbn7eqAQbWUTgFUeQ6FPC_Cg9YJhf4TWuNPnvHF8u1Q25Y_Az1IO1bYEwR7zoVZjiaBXv7NZ_7sRG7CSz8cuWWp0I4xlp3RapDp9xRJ2XEh1UIiSvp-xXvqtv5Vm09ydoj2WZ4wXYkVpKPJUplcmMI`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="rajinikanth" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly ? discover_weekly.name : "Discover weekly"}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          {/* List of songs */}
          {playing ? (
            <PauseIcon onClick={playPlaylist} className="body__shuffle" />
          ) : (
            <PlayCircleFilledIcon
              className="body__shuffle"
              onClick={playPlaylist}
            />
          )}
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
