import { Component, Input, OnInit } from '@angular/core';
import { GeneratorIntf }            from '../../types/types';
import { FormatterService }         from '../../services/formatter.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
	@Input() gen!: GeneratorIntf;

  constructor(
		  public formatSvc: FormatterService
  ) { }

  ngOnInit(): void {
  }

}
