import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ReservationService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createReservationDto: CreateReservationDto) {
		const newReservation = await this.prisma.reservation.create({
			data: {
				...createReservationDto,
			},
		});

		return newReservation;
	}

	async findAll(showId: string) {
		const reservations = await this.prisma.reservation.findMany({
			where: { showId },
		});

		return reservations;
	}

	async remove(id: string) {
		await this.prisma.reservation.update({
			where: { id, deletedAt: null },
			data: { deletedAt: new Date() },
		});
	}
}
