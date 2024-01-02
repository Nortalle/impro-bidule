import { Controller, Get, Param, Render } from '@nestjs/common';
import { ReservationService } from 'src/reservation/reservation.service';

@Controller('reservations')
export class ReservationsMvcController {
	constructor(private readonly reservationsService: ReservationService) {}

	@Get(':showId')
	@Render('reservations/list')
	async renderList(@Param('showId') showId: string) {
		const reservations = await this.reservationsService.findAll(showId);

		return { reservations };
	}
}
