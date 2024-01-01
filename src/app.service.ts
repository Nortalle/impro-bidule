import { Injectable } from '@nestjs/common';
import { Show } from './types/show.type';

const shows: Show[] = [
	{
		src: 'https://images.unsplash.com/photo-1576724196706-3f23f51ea351',
		title: 'title 1',
		date: '2023-12-16',
		hour: '20h30',
		description: '1',
		location: 'fribourg',
	},
	{
		src: 'https://images.unsplash.com/photo-1603647284638-60268b672f55',
		title: 'title 2',
		date: '2023-01-16',
		hour: '19h30',
		description: '2',
		location: 'fribourg',
	},
	{
		src: 'https://plus.unsplash.com/premium_photo-1684923603988-eac02cb84a6a',
		title: 'title 3',
		date: '2023-02-16',
		hour: '18h30',
		description: '3',
		location: 'fribourg',
	},
];

@Injectable()
export class AppService {
	getShows(): Show[] {
		return shows;
	}
}
