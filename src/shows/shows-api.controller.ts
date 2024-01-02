import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { ShowsService } from './shows.service';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { ReadShowDto } from 'src/shows/dto/read-show.dto';

@Controller('api/shows')
export class ShowsApiController {
	constructor(private readonly showsService: ShowsService) {}

	@Post()
	async create(@Body() createShowDto: CreateShowDto) {
		console.log('createShowDto ', createShowDto);
		const newShow = await this.showsService.create(createShowDto);
		return newShow;
	}

	@Get()
	async findAll() {
		const shows = await this.showsService.findAll();

		return shows;
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.showsService.findOne(id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateShowDto: UpdateShowDto) {
		return this.showsService.update(id, updateShowDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.showsService.remove(id);
	}
}
