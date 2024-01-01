import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ShowsService } from 'src/shows/shows.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		private readonly showService: ShowsService,
	) {}

	@Get()
	@Render('index')
	root(): any {
		const shows = this.showService.findAll();

		return { shows, title: 'NestJS' };
	}
}
