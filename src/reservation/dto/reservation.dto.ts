import { Reservation } from '@prisma/client';

export class ReservationDto implements Reservation {
	id: string;
	showId: string;
	name: string;
	email: string;
	reserved: number;
	deletedAt: Date;
}
