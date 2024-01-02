import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsApiController } from './shows-api.controller';
import { PrismaModule } from 'nestjs-prisma';
import { ShowsMvcController } from 'src/shows/shows-mvc.controller';

@Module({
	imports: [PrismaModule],
	controllers: [ShowsApiController, ShowsMvcController],
	providers: [ShowsService],
})
export class ShowsModule {}
