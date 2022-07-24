import { RequirementsIntf } from '../types/types';




export const itemsNameArray = [
	'Homeless', 'Tent', 'Wooden Hut', 'Cottage', 'House', 'Large House', 'Small Palace', 'Grand Palace',
	'Book', 'Dumbbells', 'Personal Squire', 'Steel Longsword', 'Butler', 'Sapphire Charm', 'Study Desk', 'Library'
] as const;
export type ItemsNameType = typeof itemsNameArray[number];

export const itemsCategoriesArray = [ 'Properties', 'Misc' ] as const;
export type ItemsCategoriesType = typeof itemsCategoriesArray[number];

export interface ItemsConfigIntf {
	'itemName': ItemsNameType;
	'category': ItemsCategoriesType;
	'requirements': RequirementsIntf[];
	'expense': number;
	'effect': number;
	'description'?: string;
}

export const itemsConfig: ItemsConfigIntf[] = [
	{
		'itemName'    : 'Homeless',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 0,
		'effect'      : 1,
		'description' : 'Sleep on the uncomfortable, filthy streets while almost freezing to death every night. It cannot get any worse than this.'
	},
	{
		'itemName'    : 'Tent',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 15,
		'effect'      : 1.4,
		'description' : 'A thin sheet of tattered cloth held up by a couple of feeble, wooden sticks. Horrible living conditions but at least you have a roof over your head.'
	},
	{
		'itemName'    : 'Wooden Hut',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 100,
		'effect'      : 2,
		'description' : 'Shabby logs and dirty hay glued together with horse manure. Much more sturdy than a tent, however, the stench isn\'t very pleasant.'
	},
	{
		'itemName'    : 'Cottage',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 750,
		'effect'      : 3.5,
		'description' : 'Structured with a timber frame and a thatched roof. Provides decent living conditions for a fair price.'
	},
	{
		'itemName'    : 'House',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 3000,
		'effect'      : 6,
		'description' : 'A building formed from stone bricks and sturdy timber, which contains a few rooms. Although quite expensive, it is a comfortable abode.'
	},
	{
		'itemName'    : 'Large House',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 25000,
		'effect'      : 12,
		'description' : 'Much larger than a regular house, which boasts even more rooms and multiple floors. The building is quite spacious but comes with a hefty price tag.'
	},
	{
		'itemName'    : 'Small Palace',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 300000,
		'effect'      : 25,
		'description' : 'A very rich and meticulously built structure rimmed with fine metals such as silver. Extremely high expenses to maintain for a lavish lifestyle.'
	},
	{
		'itemName'    : 'Grand Palace',
		'category'    : 'Properties',
		'requirements': [],
		'expense'     : 5000000,
		'effect'      : 60,
		'description' : 'A grand residence completely composed of gold and silver. Provides the utmost luxurious and comfortable living conditions possible for a ludicrous price.'
	},
	{
		'itemName'    : 'Book',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 10,
		'effect'      : 1.5,
		'description' : 'A place to write down all your thoughts and discoveries, allowing you to learn a lot more quickly.'
	},
	{
		'itemName'    : 'Dumbbells',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 50,
		'effect'      : 1.5,
		'description' : 'Heavy tools used in strenuous exercise to toughen up and accumulate strength even faster than before. '
	},
	{
		'itemName'    : 'Personal Squire',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 200,
		'effect'      : 2,
		'description' : 'Assists you in completing day to day activities, giving you more time to be productive at work.'
	},
	{
		'itemName'    : 'Steel Longsword',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 1000,
		'effect'      : 2,
		'description' : 'A fine blade used to slay enemies even quicker in combat and therefore gain more experience.'
	},
	{
		'itemName'    : 'Butler',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 7500,
		'effect'      : 1.5,
		'description' : 'Keeps your household clean at all times and also prepares three delicious meals per day, leaving you in a happier, stress-free mood.'
	},
	{
		'itemName'    : 'Sapphire Charm',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 50000,
		'effect'      : 3,
		'description' : 'Embedded with a rare sapphire, this charm activates more mana channels within your body, providing a much easier time learning magic.'
	},
	{
		'itemName'    : 'Study Desk',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 1000000,
		'effect'      : 2,
		'description' : 'A dedicated area which provides many fine stationary and equipment designed for furthering your progress in research.'
	},
	{
		'itemName'    : 'Library',
		'category'    : 'Misc',
		'requirements': [],
		'expense'     : 10000000,
		'effect'      : 1.5,
		'description' : 'Stores a collection of books, each containing vast amounts of information from basic life skills to complex magic spells.'
	}
];
