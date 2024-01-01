import { OmitType } from '@nestjs/mapped-types';
import { ShowDto } from 'src/shows/dto/show.dto';

export class CreateShowDto extends OmitType(ShowDto, ['id'] as const) {}
