import { OmitType } from '@nestjs/mapped-types';
import * as moment from 'moment';
import { ShowDto } from 'src/shows/dto/show.dto';

export class ReadShowDto extends OmitType(ShowDto, ['date'] as const) {
	date: string;

	hour: string;

	constructor(partial: Partial<ShowDto>) {
		super();

		moment.locale('fr-ch');

		const newPartial = {
			...partial,
			date: moment(partial.date).format('LL'),
			hour: moment(partial.date).format('LT'),
		};
		Object.assign(this, newPartial);
	}
}
