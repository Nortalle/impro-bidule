import { OmitType } from '@nestjs/mapped-types';
import { ReservationDto } from 'src/reservation/dto/reservation.dto';

export class UpdateReservationDto extends OmitType(ReservationDto, [
	'id',
] as const) {}
