import { PartialType } from '@nestjs/swagger';
import { CreateSeguridadDto } from './create-seguridad.dto';

export class UpdateSeguridadDto extends PartialType(CreateSeguridadDto) {}
