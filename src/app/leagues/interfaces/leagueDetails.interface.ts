import { League } from "./league.interface";
import { Team } from "./team.interface";

export interface LeagueDetails {
    league : League;
    team: Team;
    games :number;
    points:number;
    for :number;
    against:number;
    difference :number;
  }