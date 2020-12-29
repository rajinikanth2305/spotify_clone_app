import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "./StateProvider";
function SidebarOption({ option, Icon }) {
  const [{ spotify }, dispatch] = useDataLayerValue();
  //const id = uri?.split(":")[2];

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__Icon" />}

      {Icon ? (
        <h4>{option}</h4>
      ) : (
        
          <p>{option}</p>
       
      )}
    </div>
  );
}

export default SidebarOption;
