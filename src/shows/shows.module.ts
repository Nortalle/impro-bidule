import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsController } from './shows.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
	imports: [PrismaModule],
	controllers: [ShowsController],
	providers: [ShowsService],
})
export class ShowsModule {}
