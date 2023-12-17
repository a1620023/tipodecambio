import { PartialType } from '@nestjs/swagger';
import { CreateTipodecambioDto } from './create-tipodecambio.dto';

export class UpdateTipodecambioDto extends PartialType(CreateTipodecambioDto) {}
