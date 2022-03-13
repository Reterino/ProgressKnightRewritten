import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JobIntf }                                        from '../../../../lib/types/types';
import { FormatterService }                 from '../../../../lib/services/formatter.service';

@Component({
  selector: 'app-game-job',
  templateUrl: './game-job.component.html',
  styleUrls: ['./game-job.component.scss']
})
export class GameJobComponent implements OnInit {

	@Input() job!: JobIntf;
	@Output() clickedJob: EventEmitter<any> = new EventEmitter<any>()

  constructor(
			public formatSvc: FormatterService
  ) { }

  ngOnInit(): void {
  }

}
