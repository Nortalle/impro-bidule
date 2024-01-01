import { Show } from 'src/shows/entities/show.entity';

export class ShowDto implements Show {
	id: string;
	src: string;
	title: string;
	date: string;
	hour: string;
	description: string;
	location: string;
	places: number;
	price: number;
}
