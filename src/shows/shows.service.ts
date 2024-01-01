import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Show } from 'src/shows/entities/show.entity';

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
		return await this.prisma.show.findMany();
	}

	async findOne(id: string) {
		return await this.prisma.show.findUnique({
			where: { id },
		});
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
