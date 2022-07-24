import { RequirementsIntf } from '../types/types';




export const skillNameArray = [
	'Concentration', 'Productivity', 'Bargaining', 'Meditation',
	'Strength', 'Battle Tactics', 'Muscle Memory',
	'Mana Control', 'Immortality', 'Time Warping', 'Super Immortality',
	'Dark Influence', 'Evil Control', 'Intimidation', 'Demon Training', 'Blood Meditation', 'Demon\'s Wealth'
] as const;
export type SkillNameType = typeof skillNameArray[number];

export const skillCategoriesArray = [ 'Fundamentals', 'Combat', 'Magic', 'Dark Magic' ] as const;
export type SkillCategoriesType = typeof skillCategoriesArray[number];

export interface SkillConfigIntf {
	'skillName': SkillNameType;
	'category': SkillCategoriesType;
	'requirements': RequirementsIntf[];
	'maxXp': number;
	'effect': number;
	'description'?: string;
}

export const skillConfig: SkillConfigIntf[] = [
	{
		'skillName'   : 'Concentration',
		'category'    : 'Fundamentals',
		'requirements': [],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Improve your learning speed through practising intense concentration activities.'
	},
	{
		'skillName'   : 'Productivity',
		'category'    : 'Fundamentals',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 5,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Learn to procrastinate less at work and receive more job experience per day.'
	},
	{
		'skillName'   : 'Bargaining',
		'category'    : 'Fundamentals',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 20,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'effect'      : -0.01,
		'description' : 'Study the tricks of the trade and persuasive skills to lower any type of expense.'
	},
	{
		'skillName'   : 'Meditation',
		'category'    : 'Fundamentals',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 30,
				type: 'skill'
			},
			{
				name     : 'Productivity',
				level    : 20,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Fill your mind with peace and tranquility to tap into greater happiness from within.'
	},
	{
		'skillName'   : 'Strength',
		'category'    : 'Combat',
		'requirements': [],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Condition your body and strength through harsh training. Stronger individuals are paid more in the military.'
	},
	{
		'skillName'   : 'Battle Tactics',
		'category'    : 'Combat',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 20,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Create and revise battle strategies, improving experience gained in the military.'
	},
	{
		'skillName'   : 'Muscle Memory',
		'category'    : 'Combat',
		'requirements': [
			{
				name     : 'Concentration',
				level    : 30,
				type: 'skill'
			},
			{
				name     : 'Strength',
				level    : 30,
				type: 'skill'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Strengthen your neurons through habit and repetition, improving strength gains throughout the body.'
	},
	{
		'skillName'   : 'Mana Control',
		'category'    : 'Magic',
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
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user.'
	},
	{
		'skillName'   : 'Immortality',
		'category'    : 'Magic',
		'requirements': [
			{
				name     : 'Apprentice',
				level    : 10,
				type: 'job'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?'
	},
	{
		'skillName'   : 'Time Warping',
		'category'    : 'Magic',
		'requirements': [
			{
				name     : 'Mage',
				level    : 200,
				type: 'job'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Bend space and time through forbidden techniques, resulting in a faster gamespeed.'
	},
	{
		'skillName'   : 'Super Immortality',
		'category'    : 'Magic',
		'requirements': [
			{
				name     : 'Chairman',
				level    : 1000,
				type: 'job'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Through harnessing ancient, forbidden techniques, lengthen your lifespan drastically beyond comprehension.'
	},
	{
		'skillName'   : 'Dark Influence',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 1,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease.'
	},
	{
		'skillName'   : 'Evil Control',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 1,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Tame the raging and growing evil within you, improving evil gain in-between rebirths.'
	},
	{
		'skillName'   : 'Intimidation',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 1,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : -0.01,
		'description' : 'Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts.'
	},
	{
		'skillName'   : 'Demon Training',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 25,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly.'
	},
	{
		'skillName'   : 'Blood Meditation',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 75,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.01,
		'description' : 'Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.'
	},
	{
		'skillName'   : 'Demon\'s Wealth',
		'category'    : 'Dark Magic',
		'requirements': [
			{
				name     : 'Evil',
				level    : 500,
				type: 'evil'
			}
		],
		'maxXp'       : 100,
		'effect'      : 0.002,
		'description' : 'Through the means of dark magic, multiply the raw matter of the coins you receive from your job.'
	}
];