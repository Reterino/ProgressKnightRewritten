import * as moment       from 'moment';
import { JobsNameType }  from '../config/jobs.config';
import { SkillNameType } from '../config/skills.config';
import { ItemsNameType } from '../config/items.config';




export interface SaveGameIntf {
	name: string;
	lastSaveTime: moment.Moment;
}

export interface RequirementsIntf {
	name: JobsNameType | SkillNameType | ItemsNameType | 'Evil';
	type: 'job' | 'skill' | 'evil';
	level: number;
}

export interface LevelIntf {
	name: JobsNameType | SkillNameType;
	xp: number;
}

export interface ItemsIntf {
	'itemName': ItemsNameType;
	owned: boolean;
}

export interface CurrencyIntf {
	label: string;
	shorthand: string;
}