import { PartialType } from '@nestjs/swagger';
import { CreateCambiodemonedaDto } from './create-cambiodemoneda.dto';

export class UpdateCambiodemonedaDto extends PartialType(CreateCambiodemonedaDto) {}
