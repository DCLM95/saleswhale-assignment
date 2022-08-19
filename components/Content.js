import Teamcard from "./Teamcard";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { teamState, filteredTeamState } from "../atoms/filterTeamsAtom";

function Content() {
  const [teamsArray, setTeamsArray] = useRecoilState(teamState);
  const [filteredTeams, setFilteredTeams] = useRecoilState(filteredTeamState);

  useEffect(() => {
    async function getTeamsData() {
      const res = await fetch(
        "https://mocki.io/v1/6f396a3e-1470-41cf-946b-cadadfc41ab2"
      );
      const data = await res.json();
      const teamsData = data.teams;
      setTeamsArray(teamsData);
    }

    getTeamsData();
  }, []);

  return (
    <div className="shadow-[35px_35px_60px_30px_rgba(0,0,0,0.1)] bg-white">
      <div className="flex p-5  justify-between border-b-2">
        <div>
          <p>All Teams</p>
        </div>
        <div className="text-gray-400">
          <p>
            Showing {filteredTeams.length} out of {filteredTeams.length} teams
          </p>
        </div>
      </div>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-5">
        {filteredTeams?.map((team) => {
          return (
            <Teamcard
              key={team.id}
              image={team.image}
              name={team.name}
              date={team.created_at}
              description={team.description}
              campaign={team.campaigns_count}
              leads={team.leads_count}
              favourite={team.is_favorited}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Content;

// export function handleAll() {
//   const all = teamsArray.filter((team) => {
//     return team;
//   });
//   setTeamsArray(all);
// }

// export function handleFavorites() {
//   const favorites = teamsArray.filter((team) => {
//     return team.is_favorited === true;
//   });
//   setTeamsArray(favorites);
// }

// export function handleArchived() {
//   const archived = teamsArray.filter((team) => {
//     return team.is_archived === true;
//   });
//   setTeamsArray(archived);
// }
