import { Component, OnInit } from '@angular/core';
import { JobIntf }           from '../../../lib/types/types';

@Component({
  selector: 'app-game-jobs-view',
  templateUrl: './game-jobs-view.component.html',
  styleUrls: ['./game-jobs-view.component.scss']
})
export class GameJobsViewComponent implements OnInit {
	jobs: JobIntf[] = [
		{
			id: 1,
			label: 'Job #1',
			level: 0,
			totalXP: 40,
			baseIncome: 50,
			baseXPGain: 10,
			baseXPCost: 100,
			XPCostScaling: 1.1
		},
		{
			id: 2,
			label: 'Job #2',
			level: 0,
			totalXP: 80,
			baseIncome: 500,
			baseXPGain: 10,
			baseXPCost: 500,
			XPCostScaling: 1.1
		},
		{
			id: 3,
			label: 'Job #3',
			level: 0,
			totalXP: 400,
			baseIncome: 500,
			baseXPGain: 10,
			baseXPCost: 500,
			XPCostScaling: 1.1
		},
		{
			id: 4,
			label: 'Job #4',
			level: 0,
			totalXP: 40,
			baseIncome: 500,
			baseXPGain: 10,
			baseXPCost: 100,
			XPCostScaling: 1.1
		},
		{
			id: 5,
			label: 'Job #5',
			level: 0,
			totalXP: 40,
			baseIncome: 500,
			baseXPGain: 10,
			baseXPCost: 100,
			XPCostScaling: 1.1
		},
	];

  constructor() { }

  ngOnInit(): void {
  }

}
