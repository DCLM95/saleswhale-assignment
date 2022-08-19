import React from "react";
import Logo from "./icons/Logo";
import MenuCampaignIcon from "./icons/MenuCampaignIcon";
import MenuContacts from "./icons/MenuContacts";
import MenuHelp from "./icons/MenuHelp";
import MenuReports from "./icons/MenuReports";
import MenuTeamsIcon from "./icons/MenuTeamsIcon";

function Sidenav() {
  return (
    <div className="w-20 sticky z-50 top-0">
      <div className="flex flex-col bg-[#042235] justify-between h-screen items-center">
        <div>
          <Logo />
          <MenuCampaignIcon />
          <MenuTeamsIcon />
          <MenuContacts />
          <MenuReports />
        </div>
        <div>
          <MenuHelp />
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
