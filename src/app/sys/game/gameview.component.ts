import { Component, OnInit } from '@angular/core';
import { GeneratorIntf }     from '../../lib/types/types';




@Component({
	           selector   : 'app-gameview',
	           templateUrl: './gameview.component.html',
	           styleUrls  : [ './gameview.component.scss' ]
           })
export class GameViewComponent implements OnInit {
	testGen: GeneratorIntf = {
		label: 'First Generator',
		currentCount: 99999,
		purchasedCount: 400,
		currentCost: 300000000,
		baseCost: 300,
		costIncrease: 1.1,
		bonus: 3.6,
		increasePerSec: 9
	};

	constructor(
	) { }

	ngOnInit(): void {
	}

}
