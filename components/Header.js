import AddIcon from "./icons/AddIcon";
import MenuTeamsOutlineIcon from "./icons/MenuTeamsOutlineIcon";
import SearchIcon from "./icons/SearchIcon";
import { useRecoilState } from "recoil";
import { teamState, filteredTeamState } from "../atoms/filterTeamsAtom";

function Header() {
  const [teamsArray, setTeamsArray] = useRecoilState(teamState);
  const [filteredTeams, setFilteredTeams] = useRecoilState(filteredTeamState);

  return (
    <div className="border-b-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] bg-white">
      <div className="flex w-full  justify-between ">
        <div className="flex items-center p-5  space-x-3">
          <MenuTeamsOutlineIcon />
          <h1 className="text-2xl font-bold">Teams</h1>
        </div>
        <div className="flex items-center px-7  space-x-3">
          <button className="flex items-center gap-4 bg-[#40D2BF] py-2 px-6 rounded-md text-white">
            <AddIcon />
            CREATE NEW TEAM
          </button>
        </div>
      </div>
      <div className="flex w-full justify-between ">
        <div className="flex  gap-6 pt-3 px-10">
          <button
            onClick={() => {
              const all = teamsArray.filter((team) => {
                return team.name !== "";
              });
              setFilteredTeams(all);
            }}
            className=" header-items "
          >
            All
          </button>
          <button
            onClick={() => {
              const favorites = teamsArray.filter((team) => {
                return team.is_favorited === true;
              });

              setFilteredTeams(favorites);
            }}
            className=" header-items "
          >
            Favourites
          </button>
          <button
            onClick={() => {
              const archived = teamsArray.filter((team) => {
                return team.is_archived === true;
              });

              setFilteredTeams(archived);
            }}
            className=" header-items "
          >
            Archived
          </button>
        </div>
        <div className="flex items-center gap-3 pt-2 px-10 ">
          <div>
            <SearchIcon />
          </div>
          <div>
            <input placeholder="Search Team Name..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
