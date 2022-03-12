import { Injectable } from '@angular/core';
import { format }     from 'mathjs';




@Injectable({
	            providedIn: 'root'
            })
export class FormatterService {

	constructor() {
	}

	// Formats a number as follows:
	// 1000 returns 1.000K
	// 1000000 returns 1e6
	formatNumber(num: number) {
		if (num < 100000) {
			return new Intl.NumberFormat('en-US', {
				maximumFractionDigits: 3,
				notation             : 'compact',
				compactDisplay       : 'short'
			}).format(num);
		}
		return format(num, {
			lowerExp : -5,
			upperExp : 6,
			precision: 9
		});
	}

	// This assumes the number given is already a percentage!!
	// Returns a correctly formatted %, according to:
	// 90 returns 90%
	// 1.5 returns 1.5%
	// 0.001 returns 1e-3%
	formatPercent(num: number) {
		if (num > 0.01) {
			return new Intl.NumberFormat('en-US', {
				maximumFractionDigits: 3,
				minimumFractionDigits: 2,
				notation             : 'compact',
				compactDisplay       : 'short'
			}).format(num) + '%';
		} else {
			return format(num, {notation: 'exponential'}) + '%';
		}
	}
}
