import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const show = await prisma.show.create({
		data: {
			id: '1',
			src: 'https://images.unsplash.com/photo-1576724196706-3f23f51ea351',
			title: 'première représentation',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc eget nunc.',
			date: new Date(),
			location: 'Fribourg',
			places: 100,
			price: 10,
		},
	});
	console.log(show);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
