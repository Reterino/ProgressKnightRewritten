import { EventEmitter, Injectable } from '@angular/core';
import * as moment                  from 'moment';
import { SaveGameIntf }    from '../types/types';
import { NotifierService } from 'angular-notifier';




@Injectable({
	            providedIn: 'root'
            })
export class GameSaveService {

	public lastSaveTime: moment.Moment = moment('01/01/1900 00:00:00', 'DD/MM/YYYY hh:mm:ss');
	saveFile: SaveGameIntf = {
		name        : 'nullDefaultSaveName',
		lastSaveTime: this.lastSaveTime
	};
	private readonly notifier: NotifierService;

	public gameLoadedEmitter: EventEmitter<any> = new EventEmitter<any>();

	constructor(
			notifierService: NotifierService
	) {
		this.notifier = notifierService;
	}

	start() {
		this.loadSave();
	}

	loadSave() {
		this.saveFile = JSON.parse(localStorage.getItem('saveState') || '');

		// Sets save time to show on top bar.
		this.lastSaveTime = moment(this.saveFile.lastSaveTime);

		// Checks against default name, probably better way to do this.
		if (this.saveFile.name !== 'nullDefaultSaveName') {
			this.gameLoadedEmitter.emit();
			// SetTimeout to ensure DOM has loaded before notifier tries to run.
			setTimeout(() => {
				this.notifier.notify('success', 'Loaded Save Game!', 'load');
			}, 10);
		}
	}

	saveGame() {
		// Sets new save time
		this.saveFile.lastSaveTime = moment();
		this.lastSaveTime = moment();

		// Saves to localStorage
		localStorage.setItem('saveState', JSON.stringify(this.saveFile));

		// Checks to ensure successful save, then shows appropriate notification.
		let testSave = JSON.parse(localStorage.getItem('saveState') || '');
		if (moment().diff(moment(testSave.lastSaveTime)) < 5000) {
			this.notifier.notify('success', 'Save Successful!', 'save');
		} else {
			this.notifier.notify('error', 'Save Unsuccessful, please message the developer!', 'save');
		}
	}
}
