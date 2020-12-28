import React from "react";
import Sidebar from "./Sidebar";
import "./Player.css";
import Body from "./Body";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div>
      <div className="player__body">
        {/*sidebar */}
        <Sidebar />
        <Body spotify={spotify} />
        {/*body */}
      </div>

      {/*Footer */}
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
