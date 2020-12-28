import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { SkipNext } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "./StateProvider";
import PauseIcon from "@material-ui/icons/Pause";
function Footer({ spotify }) {
  const [{ token, user, item, playing }, dispatch] = useDataLayerValue();
  //uris: [`spotify:track:${id}`]
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify, item]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };
  const skipNext = () => {
    spotify.skipToNext({
      context_uri: `spotify:album:5ht7ItJgpBH7W6vJ5BqpPr`,
      Authorization: `Bearer BQAAiPLHqIFdiAdCb-UZD7VRSmLg39_mWr4KdE0sUeQFTA2vvdaceYIU9DB6L7g7xu9E9P83Iqx7wjDoWzZXJ9sDReemdPWDCIbiWuoxyjoTeWVGPp_YcySRRrqxCiv6A3i2bKexS4SmTmFnoKZfyX_05aMnqUEoVknJGXTLAqdMqxMbQOHEmI_8gxZ1cHEs67XfgdXkE35D1axQvz4WuouPMUCAWD42_2BzvfTHokN8ldP327c6PdAh9nB2ofxxEvfL8Wz12Zct-_QNio5lEQB-tIody6C-4SGB1ZR2Lyc`,
    });
    spotify.getMyCurrentPlayingTrack().then((r) => {
      console.log(r);
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      console.log(r);
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>{user?.display_name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
