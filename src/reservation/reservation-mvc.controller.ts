import { Controller, Get, Param, Render } from '@nestjs/common';
import { ReservationService } from 'src/reservation/reservation.service';
import { ShowsService } from 'src/shows/shows.service';

@Controller('reservations')
export class ReservationsMvcController {
	constructor(
		private readonly reservationsService: ReservationService,
		private readonly showsService: ShowsService,
	) {}

	@Get(':id/delete')
	@Render('reservations/list')
	async renderDelete(@Param('id') id: string) {
		const showId = await this.reservationsService.remove(id);

		const reservations = await this.reservationsService.findAll(showId);

		return { reservations };
	}

	@Get(':showId')
	@Render('reservations/list')
	async renderList(@Param('showId') showId: string) {
		const reservations = await this.reservationsService.findAll(showId);
		const show = await this.showsService.findOne(showId);

		return { reservations, show };
	}

}
