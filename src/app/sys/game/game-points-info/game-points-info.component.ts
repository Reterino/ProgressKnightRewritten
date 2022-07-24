import { Component, OnInit } from '@angular/core';
import { FormatterService }  from '../../../lib/services/formatter.service';
import { GameStartService }         from '../../../lib/services/game-start.service';
import { endAgeDays, startAgeDays } from '../../../lib/config/misc.config';




@Component({
  selector: 'app-game-points-info',
  templateUrl: './game-points-info.component.html',
  styleUrls: ['./game-points-info.component.scss']
})
export class GamePointsInfoComponent implements OnInit {

	public startAgeDays = startAgeDays;
	public endAgeDays = endAgeDays;

  constructor(
			public formatSvc: FormatterService,
			public gameStartSvc: GameStartService,
  ) {
  }

  ngOnInit(): void {
  }

}
