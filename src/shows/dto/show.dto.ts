import { Show } from '@prisma/client';

export class ShowDto implements Show {
	id: string;
	src: string;
	title: string;
	date: Date;
	hour: string;
	description: string;
	location: string;
	places: number;
	price: number;
	deletedAt: Date;
}
