import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameViewComponent }    from './sys/game/gameview.component';




const routes: Routes = [
	{
		path      : '',
		redirectTo: 'game',
		pathMatch : 'full'
	},
	{
		path        : 'game',
		loadChildren: () => import('./sys/game/game.module').then(m => m.GameModule),
		component   : GameViewComponent
	}
];

@NgModule({
	          imports: [ RouterModule.forRoot(routes) ],
	          exports: [ RouterModule ]
          })
export class AppRoutingModule {
}
