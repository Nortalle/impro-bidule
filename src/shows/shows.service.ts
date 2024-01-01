import { Injectable } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from 'src/shows/entities/show.entity';

const showsMap: Map<string, Show> = new Map([
	[
		'1',
		{
			id: '1',
			src: 'https://images.unsplash.com/photo-1576724196706-3f23f51ea351',
			title: 'title 1',
			date: '2023-12-16',
			hour: '20h30',
			description: '1',
			location: 'fribourg',
			places: 100,
			price: 20,
		},
	],
	[
		'2',
		{
			id: '2',
			src: 'https://images.unsplash.com/photo-1603647284638-60268b672f55',
			title: 'title 2',
			date: '2023-01-16',
			hour: '19h30',
			description: '2',
			location: 'fribourg',
			places: 100,
			price: 20,
		},
	],
	[
		'3',
		{
			id: '3',
			src: 'https://plus.unsplash.com/premium_photo-1684923603988-eac02cb84a6a',
			title: 'title 3',
			date: '2023-02-16',
			hour: '18h30',
			description: '3',
			location: 'fribourg',
			places: 100,
			price: 20,
		},
	],
]);

@Injectable()
export class ShowsService {
	create(createShowDto: CreateShowDto) {
		const id = Math.floor(Math.random() * 1000).toString();
		const show: Show = { id, ...createShowDto };
		showsMap.set(id, show);
		return show;
	}

	findAll() {
		return Array.from(showsMap.values());
	}

	findOne(id: string) {
		return showsMap.get(id);
	}

	update(id: string, updateShowDto: UpdateShowDto) {
		const show = showsMap.get(id);
		if (show) {
			const updatedShow = { ...show, ...updateShowDto };
			showsMap.set(id, updatedShow);
			return updatedShow;
		}
		return null;
	}

	remove(id: string) {
		return showsMap.delete(id);
	}
}
