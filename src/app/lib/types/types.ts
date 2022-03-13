import * as moment from 'moment';




export interface SaveGameIntf {
	name: string;
	lastSaveTime: moment.Moment
}

export interface JobIntf {
	id: number;
	label: string;
	level: number;
	totalXP: number;
	baseIncome: number;
	baseXPGain: number;
	baseXPCost: number;
	XPCostScaling: number;
}

export interface CurrencyIntf {
	label: string;
	shorthand: string;
}