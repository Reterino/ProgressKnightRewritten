import { Component, OnInit }        from '@angular/core';
import { FormatterService }         from '../../../lib/services/formatter.service';
import { GameStartService }         from '../../../lib/services/game-start.service';
import { GameDefaultValuesService } from '../../../lib/services/game-default-values.service';

@Component({
  selector: 'app-game-points-info',
  templateUrl: './game-points-info.component.html',
  styleUrls: ['./game-points-info.component.scss']
})
export class GamePointsInfoComponent implements OnInit {

  constructor(
			public formatSvc: FormatterService,
			public gameStartSvc: GameStartService,
			public gameDefaultValuesSvc: GameDefaultValuesService
  ) {
  }

  ngOnInit(): void {
  }

}
