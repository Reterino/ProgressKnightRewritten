import { Injectable }   from '@angular/core';
import { format }       from 'mathjs';
import { CurrencyIntf } from '../types/types';




@Injectable({
	            providedIn: 'root'
            })
export class FormatterService {

	public currencyOrder: CurrencyIntf[] = [
		{
			label    : 'copper',
			shorthand: 'c'
		},
		{
			label    : 'silver',
			shorthand: 's'
		},
		{
			label    : 'gold',
			shorthand: 'g'
		},
		{
			label    : 'platinum',
			shorthand: 'p'
		},
		{
			label    : 'obsidian',
			shorthand: 'o'
		}
	];

	constructor() {
	}

	// Formats a number as follows:
	// 1000 returns 1.000K
	// 1000000 returns 1e6
	formatNumber(num: number) {
		if (num > 0 && num < 100000) {
			return num.toString()
			          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		} else {
			return new Intl.NumberFormat('en-US', {
				maximumFractionDigits: 3,
				notation             : 'compact',
				compactDisplay       : 'short'
			}).format(num);
		}
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

	// Formats a number to be currency based upon:
	// 100c = 1s, 100s = 1g, 100g = 1p
	// Assumes 1 = 1c
	formatCurrency(num: number) {
		let numStringArray: string[] = String(num)
				.split('')
				.reverse();
		let currencyString: string[] = [];
		let re = new RegExp(',','g');
		for (let i = 0; i < this.currencyOrder.length; i++) {
			if (i === this.currencyOrder.length -1 && numStringArray[2*(this.currencyOrder.length -1)]) {
				numStringArray.splice(0,2*(this.currencyOrder.length -1))
				currencyString.push(`<span class="text-${this.currencyOrder[i].label}">${numStringArray.reverse().toString().replace(re,'') + this.currencyOrder[i].shorthand}</span>`);
			} else {
				if (numStringArray[(2 * i) + 1]) {
					currencyString.push(`<span class="text-${this.currencyOrder[i].label}">${numStringArray[(2 * i) + 1] + numStringArray[(2 * i)] + this.currencyOrder[i].shorthand}</span>`);
				} else if (numStringArray[(2 * i)]) {
					currencyString.push(`<span class="text-${this.currencyOrder[i].label}">${numStringArray[(2 * i)] + this.currencyOrder[i].shorthand}</span>`);
				}
			}
		}
		return currencyString.reverse().toLocaleString().replace(re,' ');
	}

	formatAge(num: number) {
		let years = Math.floor(num /365);
		let days = num % 365;
		return years + ' years, ' + days + ' days';
	}
}
