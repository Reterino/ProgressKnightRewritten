import * as moment from 'moment';




export interface SaveGameIntf {
	name: string;
	lastSaveTime: moment.Moment
}

export interface GeneratorIntf {
	label: string;
	currentCount: number;
	purchasedCount: number;
	currentCost: number;
	baseCost: number;
	costIncrease: number;
	bonus: number;
	increasePerSec: number;
}