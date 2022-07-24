import { Injectable }      from '@angular/core';
import { GameSaveService }          from './game-save.service';
import { endAgeDays, startAgeDays } from '../config/misc.config';




@Injectable({
	            providedIn: 'root'
            })
export class GameStartService {

	public gamePlaying: boolean = false;

	public defaultLifeSpanDays: number = endAgeDays - startAgeDays;

	constructor(
			private gameSaveSvc: GameSaveService
	) {
		this.gameSaveSvc.gameLoadedEmitter.subscribe(() => this.play());
	}

	// Starts game with current save.
	play() {
		this.gamePlaying = true;
	}

	// Pause game if currently playing.
	// Unpauses if already playing.
	pause() {
		this.gamePlaying = !this.gamePlaying;
	}
}
