import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReservationService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createReservationDto: CreateReservationDto) {
		const { reserved, showId } = createReservationDto;

		const show = await this.prisma.show.findUnique({ where: { id: showId } });

		if (!show) {
			throw new Error('Show not found');
		}

		const remainingCapacity = show.places - show.reserved;

		if (remainingCapacity < reserved) {
			throw new Error('Not enough capacity');
		}

		const newReservation = await this.prisma.reservation.create({
			data: {
				...createReservationDto,
			},
		});

		await this.prisma.show.update({
			where: { id: showId },
			data: { reserved: show.reserved + reserved },
		});

		return newReservation;
	}

	async findAll(showId: string) {
		const reservations = await this.prisma.reservation.findMany({
			where: { showId, deletedAt: null },
		});

		return reservations;
	}

	async remove(id: string) {
		const reservation = await this.prisma.reservation.findUnique({
			where: { id, deletedAt: null },
		});

		const { reserved, showId } = reservation;

		const show = await this.prisma.show.findUnique({ where: { id: showId } });

		await this.prisma.reservation.update({
			where: { id, deletedAt: null },
			data: { deletedAt: new Date() },
		});

		await this.prisma.show.update({
			where: { id: showId },
			data: { reserved: show.reserved - reserved },
		});

		return showId;
	}
}
