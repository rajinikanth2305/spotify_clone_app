import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Albums artists,songs " type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="Rajini" />

        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
