import { atom } from "recoil";

export const teamState = atom({
  key: "teamState",
  default: [],
});

export const filteredTeamState = atom({
  key: "filteredTeamState",
  default: [],
});
