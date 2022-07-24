import { Component, OnInit }                                                from '@angular/core';
import { jobCategoriesArray, JobCategoriesType, JobConfigIntf, jobsConfig } from '../../../lib/config/jobs.config';
import { GameDataStorageService }                                           from '../../../lib/services/game-data-storage.service';




@Component({
	           selector   : 'app-game-jobs-view',
	           templateUrl: './game-jobs-view.component.html',
	           styleUrls  : [ './game-jobs-view.component.scss' ]
           })
export class GameJobsViewComponent implements OnInit {

	jobTabs = jobCategoriesArray;
	jobConfig: JobConfigIntf[] = jobsConfig;

	constructor(
			public gameDataStorageSvc: GameDataStorageService
	) {
	}

	ngOnInit(): void {
	}

	filterJobConfig(jobConfig: JobConfigIntf[], tab: JobCategoriesType) {
		return jobConfig.filter(d => d.category === tab);
	}

	requirementsMet(config: JobConfigIntf) {
		let requirementsMet = true;
		for (const conf of config.requirements) {
			switch (conf.type) {
				case 'job': {
					let data = this.gameDataStorageSvc.jobData.find(d => d.name === conf.name)!;
					let level = this.gameDataStorageSvc.getLevel(data, 'job');
					if (level >= conf.level) {
						break;
					} else {
						return false;
					}
				}
				case 'skill': {
					let data = this.gameDataStorageSvc.skillsData.find(d => d.name === conf.name)!;
					let level = this.gameDataStorageSvc.getLevel(data, 'skill');
					if (level >= conf.level) {
						break;
					} else {
						return false;
					}
				}
			}
		}
		return requirementsMet;
	}

	requirementsText(config: JobConfigIntf) {
		let string = '';
		config.requirements.forEach((d, i, a) => {
			string += 'Level ' + d.level + ' ' + d.name;
			if (i < (a.length - 2)) {
				string += ',';
			}
			if (i === a.length - 2) {
				string += ', and ';
			}
		});
		string += '...';
		return string;
	}
}
