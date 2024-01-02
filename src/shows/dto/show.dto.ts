import { Show } from '@prisma/client';

export class ShowDto implements Show {
	id: string;
	src: string;
	title: string;
	date: Date;
	hour: string;
	description: string;
	street: string;
	zip: string;
	city: string;
	country: string;
	places: number;
	reserved: number;
	price: number;
	deletedAt: Date;
}
