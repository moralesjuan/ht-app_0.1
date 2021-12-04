import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league/league.component';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import { LeagueService } from './services/league.service';
import { LeagueDetailsService } from './services/league-details.service';

@NgModule({
  declarations: [
    LeagueComponent    
  ],
  exports:[
    LeagueComponent
  ],
  imports: [
    CommonModule, TableModule, ButtonModule, CardModule
  ],
  providers: [
    LeagueService, LeagueDetailsService
  ]
})
export class LeaguesModule { }
