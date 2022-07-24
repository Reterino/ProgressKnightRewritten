import { RequirementsIntf } from '../types/types';




export const jobsNameArray = [ 'Beggar', 'Farmer', 'Fisherman', 'Miner', 'Blacksmith', 'Merchant', 'Squire', 'Footman', 'Veteran Footman', 'Knight', 'Veteran Knight', 'Elite Knight', 'Holy Knight', 'Legendary Knight', 'Student', 'Apprentice', 'Mage', 'Wizard', 'Master Wizard', 'Chairman' ] as const;
export type JobsNameType = typeof jobsNameArray[number];

export const jobCategoriesArray = [ 'Common Work', 'Military', 'Arcane Association' ] as const;
export type JobCategoriesType = typeof jobCategoriesArray[number];

export interface JobConfigIntf {
	'jobName': JobsNameType;
	'category': JobCategoriesType;
	'requirements': RequirementsIntf[];
	'maxXp': number;
	'income': number;
	'description'?: string;
}

export const jobsConfig: JobConfigIntf[] = [
	{
		'jobName'     : 'Beggar',
		'category'    : 'Common Work',
		'requirements': [],
		'maxXp'       : 50,
		'income'      : 5,
		'description' : 'Struggle day and night for a couple of copper coins. It feels like you are at the brink of death each day.'
	},
	{
		'jobName'     : 'Farmer',
		'category'    : 'Common Work',
		'requirements': [
			{
				name     : 'Beggar',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 100,
		'income'      : 9,
		'description' : 'Plow the fields and grow the crops. It\'s not much but it\'s honest work.'
	},
	{
		'jobName'     : 'Fisherman',
		'category'    : 'Common Work',
		'requirements': [
			{
				name     : 'Farmer',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 200,
		'income'      : 15,
		'description' : 'Reel in various fish and sell them for a handful of coins. A relaxing but still a poor paying job.'
	},
	{
		'jobName'     : 'Miner',
		'category'    : 'Common Work',
		'requirements': [
			{
				name     : 'Fisherman',
				level    : 10,
				type: 'job'
			},
			{
				name     : 'Strength',
				level    : 10,
				type: 'skill'
			}
		],
		'maxXp'       : 400,
		'income'      : 40,
		'description' : 'Delve into dangerous caverns and mine valuable ores. The pay is quite meager compared to the risk involved.'
	},
	{
		'jobName'     : 'Blacksmith',
		'category'    : 'Common Work',
		'requirements': [
			{
				name     : 'Miner',
				level    : 10,
				type: 'job'
			},
			{
				name     : 'Strength',
				level    : 30,
				type: 'skill'
			}
		],
		'maxXp'       : 800,
		'income'      : 80,
		'description' : 'Smelt ores and carefully forge weapons for the military. A respectable and OK paying commoner job.'
	},
	{
		'jobName'     : 'Merchant',
		'category'    : 'Common Work',
		'requirements': [
			{
				name     : 'Blacksmith',
				level    : 10,
				type: 'job'
			},
			{
				name     : 'Bargaining',
				level    : 50,
				type: 'skill'
			}
		],
		'maxXp'       : 1600,
		'income'      : 150,
		'description' : 'Travel from town to town, bartering fine goods. The job pays decently well and is a lot less manually-intensive.'
	},
	{
		'jobName'     : 'Squire',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Strength',
				level    : 5,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'income'      : 5,
		'description' : 'Carry around your knight\'s shield and sword along the battlefield. Very meager pay but the work experience is quite valuable.'
	},
	{
		'jobName'     : 'Footman',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Strength',
				level    : 20,
				type: 'skill'
			},
			{
				name     : 'Squire',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 1000,
		'income'      : 50,
		'description' : 'Put down your life to battle with enemy soldiers. A courageous, respectable job but you are still worthless in the grand scheme of things.'
	},
	{
		'jobName'     : 'Veteran Footman',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Battle Tactics',
				level    : 40,
				type: 'skill'
			},
			{
				name     : 'Footman',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 10000,
		'income'      : 120,
		'description' : 'More experienced and useful than the average footman, take out the enemy forces in battle with your might. The pay is not that bad.'
	},
	{
		'jobName'     : 'Knight',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Strength',
				level    : 100,
				type: 'skill'
			},
			{
				name     : 'Veteran Footman',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 100000,
		'income'      : 300,
		'description' : 'Slash and pierce through enemy soldiers with ease, while covered in steel from head to toe. A decently paying and very respectable job.'
	},
	{
		'jobName'     : 'Veteran Knight',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Battle Tactics',
				level    : 150,
				type: 'skill'
			},
			{
				name     : 'Knight',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 1000000,
		'income'      : 1000,
		'description' : 'Utilising your unmatched combat ability, slaugher enemies effortlessly. Most footmen in the military would never be able to acquire such a well paying job like this.'
	},
	{
		'jobName'     : 'Elite Knight',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Strength',
				level    : 300,
				type: 'skill'
			},
			{
				name     : 'Veteran Knight',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 7500000,
		'income'      : 3000,
		'description' : 'Obliterate squadrons of enemy soldiers in one go with extraordinary proficiency, while equipped with the finest gear. Such a feared unit on the battlefield is paid extremely well.'
	},
	{
		'jobName'     : 'Holy Knight',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 500,
				type: 'skill'
			},
			{
				name     : 'Elite Knight',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 40000000,
		'income'      : 15000,
		'description' : 'Collapse entire armies in mere seconds with your magically imbued blade. The handful of elite knights who attain this level of power are showered with coins.'
	},
	{
		'jobName'     : 'Legendary Knight',
		'category'    : 'Military',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 1000,
				type: 'skill'
			},
			{
				name     : 'Battle Tactics',
				level    : 1000,
				type: 'skill'
			},
			{
				name     : 'Holy Knight',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 150000000,
		'income'      : 50000,
		'description' : 'Feared worldwide, obliterate entire nations in a blink of an eye. Roughly every century, only one holy knight is worthy of receiving such an esteemed title.'
	},
	{
		'jobName'     : 'Student',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 200,
				type: 'skill'
			},
			{
				name     : 'Meditation',
				level    : 200,
				type: 'skill'
			}
		],
		'maxXp'       : 100000,
		'income'      : 100,
		'description' : 'Study the theory of mana and practice basic spells. There is minor pay to cover living costs, however, this is a necessary stage in becoming a mage.'
	},
	{
		'jobName'     : 'Apprentice',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 400,
				type: 'skill'
			},
			{
				name     : 'Student',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 1000000,
		'income'      : 1000,
		'description' : 'Under the supervision of a mage, perform basic spells against enemies in battle. Generous pay will be provided to cover living costs.'
	},
	{
		'jobName'     : 'Mage',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 700,
				type: 'skill'
			},
			{
				name     : 'Apprentice',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 10000000,
		'income'      : 7500,
		'description' : 'Turn the tides of battle through casting intermediate spells and mentor other apprentices. The pay for this particular job is extremely high.'
	},
	{
		'jobName'     : 'Wizard',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 1000,
				type: 'skill'
			},
			{
				name     : 'Mage',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 100000000,
		'income'      : 50000,
		'description' : 'Utilise advanced spells to ravage and destroy entire legions of enemy soldiers. Only a small percentage of mages deserve to attain this role and are rewarded with an insanely high pay.'
	},
	{
		'jobName'     : 'Master Wizard',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 1500,
				type: 'skill'
			},
			{
				name     : 'Wizard',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 10000000000,
		'income'      : 250000,
		'description' : 'Blessed with unparalleled talent, perform unbelievable feats with magic at will. It is said that a master wizard has enough destructive power to wipe an empire off the map.'
	},
	{
		'jobName'     : 'Chairman',
		'category'    : 'Arcane Association',
		'requirements': [
			{
				name     : 'Mana Control',
				level    : 2000,
				type: 'skill'
			},
			{
				name     : 'Master Wizard',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 1000000000000,
		'income'      : 1000000,
		'description' : 'Spend your days administrating The Arcane Association and investigate the concepts of true immortality. The chairman receives ludicrous amounts of pay daily.'
	}
];