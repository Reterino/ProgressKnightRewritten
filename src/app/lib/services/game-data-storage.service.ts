import { Injectable }                   from '@angular/core';
import { ItemsIntf, LevelIntf }         from '../types/types';
import { JobConfigIntf, jobsConfig }    from '../config/jobs.config';
import { skillConfig, SkillConfigIntf } from '../config/skills.config';
import { itemsConfig, ItemsConfigIntf } from '../config/items.config';




@Injectable({
	            providedIn: 'root'
            })
export class GameDataStorageService {

	jobData: LevelIntf[] = [];
	skillsData: LevelIntf[] = [];
	itemsData: ItemsIntf[] = [];
	evilLevel: number = 0;

	levelGrowth: number = 1.05;

	constructor() {
		this.startNewGame();
	}

	startNewGame() {
		jobsConfig.forEach(d => {
			this.jobData.push({
				                  name: d.jobName,
				                  xp  : 0
			                  });
		});
		skillConfig.forEach(d => {
			this.skillsData.push({
				                     name: d.skillName,
				                     xp  : 0
			                     });
		});
		itemsConfig.forEach(d => {
			this.itemsData.push({
				                    itemName: d.itemName,
				                    owned   : false
			                    });
		});
	}

	getLevel(skill: LevelIntf, type: 'job' | 'skill') {
		switch (type) {
			case 'job': {
				let config = jobsConfig.find(d => d.jobName === skill.name)!;
				return (Math.log(((skill.xp / config.maxXp) * (this.levelGrowth - 1)) + 1) / Math.log(this.levelGrowth)) - 1;
			}
			case 'skill': {
				let config = skillConfig.find(d => d.skillName === skill.name)!;
				return (Math.log(((skill.xp / config.maxXp) * (this.levelGrowth - 1)) + 1) / Math.log(this.levelGrowth)) - 1;
			}
		}
	}

	getJobDataFromConfig(jobConfig: JobConfigIntf) {
		return this.jobData.find(d => d.name === jobConfig.jobName)!;
	}

	getSkillDataFromConfig(skillConfig: SkillConfigIntf) {
		return this.skillsData.find(d => d.name === skillConfig.skillName)!;
	}

	getItemDataFromConfig(itemConfig: ItemsConfigIntf) {
		return this.itemsData.find(d => d.itemName === itemConfig.itemName)!;
	}
}
