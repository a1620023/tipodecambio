import { Injectable } from '@nestjs/common';
import { CreateSeguridadDto } from './dto/create-seguridad.dto';
import { UpdateSeguridadDto } from './dto/update-seguridad.dto';

@Injectable()
export class SeguridadService {
  create(createSeguridadDto: CreateSeguridadDto) {
    return 'This action adds a new seguridad';
  }

  findAll() {
    return `This action returns all seguridad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seguridad`;
  }

  update(id: number, updateSeguridadDto: UpdateSeguridadDto) {
    return `This action updates a #${id} seguridad`;
  }

  remove(id: number) {
    return `This action removes a #${id} seguridad`;
  }
}
