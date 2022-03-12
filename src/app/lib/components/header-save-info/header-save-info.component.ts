import { Component, OnInit } from '@angular/core';
import * as moment           from 'moment';
import { GameSaveService }   from '../../services/game-save.service';




@Component({
	           selector   : 'app-header-save-info',
	           templateUrl: './header-save-info.component.html',
	           styleUrls  : [ './header-save-info.component.scss' ]
           })
export class HeaderSaveInfoComponent implements OnInit {

	constructor(
			public gameSaveSvc: GameSaveService
	) { }

	ngOnInit(): void {
	}

	diffFromNow() {
		return moment()
				.diff(this.gameSaveSvc.lastSaveTime);
	}

	saveNow() {
		this.gameSaveSvc.saveGame();
	}

	timeSinceLastSave() {
		if (this.diffFromNow() > 2707200000) {
			return 'more than a month...';
		}
		return this.gameSaveSvc.lastSaveTime.fromNow();
	}
}
