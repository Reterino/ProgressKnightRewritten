import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameDefaultValuesService {

	// Start at 14 years old.
	public startAgeInDays: number = 14*365;
	// Default live to 70 years.
	public endAgeInDays: number = 70*365;

  constructor() { }
}
