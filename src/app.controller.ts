import { Controller, Get, Render } from '@nestjs/common';
import { ShowsService } from 'src/shows/shows.service';

@Controller()
export class AppController {
	constructor(private readonly showService: ShowsService) {}

	@Get()
	@Render('index')
	async root(): Promise<any> {
		const shows = await this.showService.findAll();

		return { shows, title: 'NestJS' };
	}
}
