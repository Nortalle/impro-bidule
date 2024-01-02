import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Controller('api/reservation')
export class ReservationApiController {
	constructor(private readonly reservationService: ReservationService) {}

	@Post()
	create(@Body() createReservationDto: CreateReservationDto) {
		return this.reservationService.create(createReservationDto);
	}

	@Get()
	findAll(@Param('showId') showId: string) {
		return this.reservationService.findAll(showId);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.reservationService.remove(id);
	}
}
