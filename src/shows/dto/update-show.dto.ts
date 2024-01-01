import { OmitType } from '@nestjs/mapped-types';
import { ShowDto } from 'src/shows/dto/show.dto';

export class UpdateShowDto extends OmitType(ShowDto, ['id'] as const) {}
