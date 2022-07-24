import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LevelIntf }                             from '../../../../lib/types/types';
import { FormatterService }                               from '../../../../lib/services/formatter.service';
import { JobConfigIntf }                                  from '../../../../lib/config/jobs.config';

@Component({
  selector: 'app-game-job',
  templateUrl: './game-job.component.html',
  styleUrls: ['./game-job.component.scss']
})
export class GameJobComponent implements OnInit {

	@Input() jobConfig!: JobConfigIntf;
	@Input() jobData: LevelIntf | undefined;
	@Output() clickedJob: EventEmitter<any> = new EventEmitter<any>()

  constructor(
			public formatSvc: FormatterService
  ) { }

  ngOnInit(): void {
  }

}
