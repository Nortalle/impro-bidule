import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { ReadShowDto } from 'src/shows/dto/read-show.dto';

@Injectable()
export class ShowsService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: CreateShowDto) {
		const newShow = await this.prisma.show.create({
			data: {
				...data,
			},
		});

		return newShow;
	}

	async findAll() {
		const shows = await this.prisma.show.findMany({
			where: { deletedAt: null },
		});

		const readShows = shows.map((show) => new ReadShowDto(show));
		return readShows;
	}

	async findOne(id: string) {
		const show = await this.prisma.show.findUnique({
			where: { id },
		});

		return new ReadShowDto(show);
	}

	async update(id: string, data: UpdateShowDto) {
		const updatedShow = await this.prisma.show.update({
			where: { id },
			data,
		});

		return updatedShow;
	}

	async remove(id: string) {
		await this.prisma.show.update({
			where: { id, deletedAt: null },
			data: { deletedAt: new Date() },
		});
	}

	// create(createShowDto: CreateShowDto) {
	// 	const id = Math.floor(Math.random() * 1000).toString();
	// 	const show: Show = { id, ...createShowDto };
	// 	showsMap.set(id, show);
	// 	return show;
	// }

	// findAll() {
	// 	return Array.from(showsMap.values());
	// }

	// findOne(id: string) {
	// 	return showsMap.get(id);
	// }

	// update(id: string, updateShowDto: UpdateShowDto) {
	// 	const show = showsMap.get(id);
	// 	if (show) {
	// 		const updatedShow = { ...show, ...updateShowDto };
	// 		showsMap.set(id, updatedShow);
	// 		return updatedShow;
	// 	}
	// 	return null;
	// }

	// remove(id: string) {
	// 	return showsMap.delete(id);
	// }
}
