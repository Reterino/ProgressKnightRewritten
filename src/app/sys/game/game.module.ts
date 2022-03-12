import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { GameViewComponent }       from './gameview.component';
import { GamePointsInfoComponent } from './game-points-info/game-points-info.component';
import { LibModule }               from '../../lib/lib.module';




@NgModule({
	          declarations: [ GameViewComponent, GamePointsInfoComponent ],
	          imports: [
		          CommonModule,
		          LibModule
	          ]
          })
export class GameModule {
}
