import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationApiController } from './reservation-api.controller';
import { ReservationsMvcController } from 'src/reservation/reservation-mvc.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
	imports: [PrismaModule],
	controllers: [ReservationApiController, ReservationsMvcController],
	providers: [ReservationService],
})
export class ReservationModule {}
