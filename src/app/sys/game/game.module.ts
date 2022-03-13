import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { GameViewComponent }       from './gameview.component';
import { GamePointsInfoComponent } from './game-points-info/game-points-info.component';
import { LibModule }               from '../../lib/lib.module';
import { GameJobsViewComponent }   from './game-jobs-view/game-jobs-view.component';
import { GameShopViewComponent }   from './game-shop-view/game-shop-view.component';
import { MatTabsModule }           from '@angular/material/tabs';
import { GameJobComponent }        from './game-jobs-view/game-job/game-job.component';
import { GameSkillsViewComponent } from './game-skills-view/game-skills-view.component';




@NgModule({
	          declarations: [
		          GameViewComponent, GamePointsInfoComponent, GameJobsViewComponent, GameShopViewComponent, GameJobComponent, GameSkillsViewComponent
	          ],
	          imports     : [
		          CommonModule,
		          LibModule,
		          MatTabsModule
	          ]
          })
export class GameModule {
}
