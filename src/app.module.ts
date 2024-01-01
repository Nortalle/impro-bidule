import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowsModule } from './shows/shows.module';
import { ShowsService } from 'src/shows/shows.service';
import { PrismaModule } from 'nestjs-prisma';

@Module({
	imports: [ShowsModule, PrismaModule.forRoot()],
	controllers: [AppController],
	providers: [AppService, ShowsService],
})
export class AppModule {}
