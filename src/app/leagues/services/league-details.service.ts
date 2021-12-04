import { Injectable } from '@angular/core';
import { LeagueDetails } from '../interfaces/leagueDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueDetailsService {

  constructor() { }

  get LeagueDetails (){
    return [...this._leagueDetails];
  }

  private _leagueDetails: LeagueDetails[] = [{
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 136,
      "name": "Team 136"
    },
    "games": 2,
    "points": 6,
    "for": 5,
    "against": 1,
    "difference": 4
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 110,
      "name": "Team 110"
    },
    "games": 2,
    "points": 4,
    "for": 5,
    "against": 1,
    "difference": 4
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 96,
      "name": "Team 96"
    },
    "games": 2,
    "points": 4,
    "for": 5,
    "against": 3,
    "difference": 2
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 71,
      "name": "Team 71"
    },
    "games": 2,
    "points": 4,
    "for": 4,
    "against": 2,
    "difference": 2
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 131,
      "name": "Team 131"
    },
    "games": 2,
    "points": 1,
    "for": 2,
    "against": 4,
    "difference": -2
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 77,
      "name": "Team 77"
    },
    "games": 2,
    "points": 1,
    "for": 1,
    "against": 3,
    "difference": -2
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 128,
      "name": "Team 128"
    },
    "games": 2,
    "points": 1,
    "for": 1,
    "against": 3,
    "difference": -2
  },
  {
    "league": {
      "leagueId": 1,
      "series": "Allsvenskan",
      "level": 1
    },
    "team": {
      "teamId": 160,
      "name": "Team 160"
    },
    "games": 2,
    "points": 0,
    "for": 1,
    "against": 7,
    "difference": -6
  }];
}
