import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { League } from '../interfaces/league.interface';

const LEVEL : string = '';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  private _url : string = 'https://localhost:7150/api/Leagues';
  public currentLeague! : League;
  public leaguesByLevel : League[] = [];
  public leagues : League[] = [];

  private _level!: number;
  private _currentLeagueId!: number;

  constructor(private http: HttpClient) { }

  public get CurrentLeagueId(): number {
    return this._currentLeagueId;
  }
  public set CurrentLeagueId(value: number) {
    this._currentLeagueId = value;
  }

  public get CurrentLevel(): number {
    return this._level;
  }
  public set CurrentLevel(value: number) {
    this._level = value;
  }

  // public get AllLeagues () {
  //   if (this.leagues.length === 0){
  //     this.getAll();
  //   }
  //   return this.leagues
  // }

  // public get LeaguesByLevel (){
  //   if (this.leaguesByLevel.length === 0){
  //     this.getByLevel(this._level);
  //   }
  //   return this.leaguesByLevel
  // }

  // set LeaguesByLevel (value : League[]){
  //   this.leaguesByLevel = value;
  // }

  // public get CurrentLeague (){
  //   if (this.currentLeague == null){
  //     this.getByLeagueId(this._currentLeagueId);
  //   }
  //   return this.currentLeague
  // }

  // set CurrentLeague (value : League){
  //   this.currentLeague = value;
  // }

  getAll () : League[] | any {
    this.http.get<League[]>(this._url)
    .subscribe( ( resp )   => {
      if (resp.length === 0){
        console.log(`No se cargo nada de la ruta: ${this._url}` );
      }
      this.leagues = resp;
      return resp;
    });
  }

  getByLevel (level : number = 1) : League[] | any {
    this.http.get<League[]>(`${this._url}/Level/${level}`)
    .subscribe( ( resp ) => {
      if (resp.length === 0){
        console.log(`No se cargo nada de la ruta: ${this._url}/Level/${level}` );
      }
      this.leaguesByLevel = resp;
      return resp;
    });
  }
  
  getByLeagueId (leagueId : number = 1) : League | any {
    this.http.get<League>(`${this._url}/${leagueId}`)
    .subscribe( ( resp )  => {
      if (resp == null){
        console.log(`No se cargo nada de la ruta: ${this._url}/${leagueId}` );
      }
      this.currentLeague = resp;
      return resp;
    });
  }
  
}
