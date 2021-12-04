import { Component } from '@angular/core';

import { LeagueService } from '../services/league.service';
import { LeagueDetailsService } from '../services/league-details.service';
import { League } from '../interfaces/league.interface';

@Component({
  
  selector: 'app-league',
  templateUrl: './league.component.html'
})
export class LeagueComponent  {
  private _lowestLevel: number = 0;
  private _highestLevel: number = 0;
  private _lowestSerie: number = 0;
  private _highestSerie: number = 0;
  league! : League;

  constructor(private leagueService: LeagueService, private leagueDetailsService : LeagueDetailsService)
    {
      this.leagueService.CurrentLevel = 1;
      this.leagueService.CurrentLeagueId = 1;

      if (this.leagueService.leagues.length === 0){
        this.leagueService.getAll();
      }
      if (this.leagueService.leaguesByLevel.length === 0){
        this.leagueService.getByLevel(this.leagueService.CurrentLevel);
      }
      if (this.leagueService.currentLeague == null){
        this.league = this.leagueService.getByLeagueId(this.leagueService.CurrentLeagueId);
      }
    }

//#region Getters and Setters
  public get LowestLevel(): number {
    if (this._lowestLevel === 0){
      this._lowestLevel = this.AllLeagues.reduce(
        (max, league) => (league.level > max ? league.level : max),
        this.AllLeagues[0].level
      );
    }
    return this._lowestLevel;
  }
  public set LowestLevel(value: number) {
    this._lowestLevel = value;
  }

  public get HighestLevel(): number {
    if (this._highestLevel  === 0){
      this._highestLevel = this.AllLeagues.reduce(function(prev, curr) {
        return prev.level < curr.level ? prev : curr;
      }).level;
    }
    return this._highestLevel;
  }
  public set HighestLevel(value: number) {
    this._highestLevel = value;
  }
  
  public get LowestSerie(): number {
    if (this._lowestSerie  === 0){
      this._lowestSerie = this.getLowestSerie();
    }
    return this._lowestSerie;
  }
  public set LowestSerie(value: number) {
    this._lowestSerie = value;
  }

  public get HighestSerie(): number {
    if (this._highestSerie  === 0){
      this._highestLevel = this.getHighestSerie();
    }
    return this._highestSerie;
  }
  public set HighestSerie(value: number) {
    this._highestSerie = value;
  }
  
  get CurrentLeagueId (){
    return this.leagueService.CurrentLeagueId;
  }
  
  set CurrentLeagueId (value : number){
    this.leagueService.CurrentLeagueId = value;
  }

  get CurrentLevel (){
    return this.leagueService.CurrentLevel;
  }

  set CurrentLevel (value : number) {
    this.leagueService.CurrentLevel = value;
  }
  
  get AllLeagues (){
    return this.leagueService.leagues;
  }

  get LeaguesByLevel(){
    return this.leagueService.leaguesByLevel;
  }

  get CurrentLeague () {
    return this.leagueService.currentLeague;
  }

  get leagueDetails(){
    return this.leagueDetailsService.LeagueDetails;
  }

//#endregion

  nextLevel() {
    if (!(this.CurrentLevel == this.LowestLevel)) {  
      this.CurrentLevel += 1;
      this.changeSerieLevel();
    }
  }

  prevLevel() {
    if (!(this.CurrentLevel == this.HighestLevel)) {
      this.CurrentLevel -= 1;
      this.changeSerieLevel();
    }
  }

  changeSerieLevel() : void{
    this.leagueService.getByLevel(this.CurrentLevel );
    this.CurrentLeagueId = this.getHighestSerie();
    this.league = this.leagueService.getByLeagueId(this.CurrentLeagueId);
  }

  nextSerie() {
    if (!(this.CurrentLeagueId == this.LowestSerie)) {  
      this.CurrentLeagueId += 1;
    }
  }

  prevSerie() {
    if (!(this.CurrentLeagueId == this.HighestSerie)) {
      this.CurrentLeagueId -= 1;
    }
  }

  getLowestSerie () :number {
    return this.LeaguesByLevel.reduce(
      (max, league) => (league.leagueId > max ? league.leagueId : max),
      this.LeaguesByLevel[0].leagueId
    );
  }

  getHighestSerie () : number {
    return this.LeaguesByLevel.reduce(function(prev, curr) {
      return prev.leagueId < curr.leagueId ? prev : curr;
    }).leagueId;
  }
}


