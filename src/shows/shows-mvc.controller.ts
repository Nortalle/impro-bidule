import { Controller, Get, Param, Render } from '@nestjs/common';
import { ShowsService } from 'src/shows/shows.service';

@Controller('shows')
export class ShowsMvcController {
	constructor(private readonly showsService: ShowsService) {}

	@Get()
	@Render('shows/agenda')
	async renderAll() {
		const shows = await this.showsService.findAll();

		return { shows };
	}

	@Get('create')
	@Render('shows/form')
	renderCreate() {
		return {};
	}

	@Get(':id')
	@Render('shows/view')
	async renderOne(@Param('id') id: string) {
		const show = await this.showsService.findOne(id);



		return { show };
	}
}
