import { Component }       from '@angular/core';
import { GameSaveService } from './lib/services/game-save.service';




@Component({
	           selector   : 'app-root',
	           templateUrl: './app.component.html',
	           styleUrls  : [ './app.component.scss' ]
           })
export class AppComponent {
	title = 'BasicIncremental';

	constructor(private gameSaveSvc: GameSaveService) {
		this.gameSaveSvc.start();
	}
}
