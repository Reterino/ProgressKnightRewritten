import { Component, OnInit } from '@angular/core';




@Component({
	           selector   : 'app-footer-bar',
	           templateUrl: './footer-bar.component.html',
	           styleUrls  : [ './footer-bar.component.scss' ]
           })
export class FooterBarComponent implements OnInit {

	public time: Date = new Date();

	constructor() { }

	ngOnInit(): void {
		this.incTime();
	}

	incTime() {
		this.time = new Date();
		setTimeout(() => this.incTime(),1000)
	}

}
