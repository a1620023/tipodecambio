import { Injectable } from '@nestjs/common';
import { CreateCambiodemonedaDto } from './dto/create-cambiodemoneda.dto';
import { UpdateCambiodemonedaDto } from './dto/update-cambiodemoneda.dto';

@Injectable()
export class CambiodemonedaService {
  create(createCambiodemonedaDto: CreateCambiodemonedaDto) {
    return 'This action adds a new cambiodemoneda';
  }

  findAll() {
    return `This action returns all cambiodemoneda`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cambiodemoneda`;
  }

  update(id: number, updateCambiodemonedaDto: UpdateCambiodemonedaDto) {
    return `This action updates a #${id} cambiodemoneda`;
  }

  remove(id: number) {
    return `This action removes a #${id} cambiodemoneda`;
  }
}
