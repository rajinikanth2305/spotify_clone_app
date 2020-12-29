import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./StateProvider";
//console.log(playlists);

function Sidebar() {
  const [{ playlists, spotify }, dispatch] = useDataLayerValue();
  //console.log(playlists);
  const handleClick = (id) => {
    const playlistId = id.split(":")[2];
    spotify.getPlaylist(playlistId).then((response) => {
      console.log(response);
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div>
        <SidebarOption option="Home" Icon={HomeIcon} />
        <SidebarOption option="Search" Icon={SearchIcon} />
        <SidebarOption option="Library" Icon={LibraryMusicIcon} />
      </div>
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>

      <hr />
      {playlists?.items?.map((playlist, index) => (
        <div
          onClick={() => handleClick(playlist.uri)}
          className="sidebarOption"
        >
          <p>{playlist.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
