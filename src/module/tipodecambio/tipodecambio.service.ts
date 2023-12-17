import { Injectable } from '@nestjs/common';
import { CreateTipodecambioDto } from './dto/create-tipodecambio.dto';
import { UpdateTipodecambioDto } from './dto/update-tipodecambio.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tipodecambio } from './entities/tipodecambio.entity';

@Injectable()
export class TipodecambioService {
  constructor(
    @InjectRepository(Tipodecambio)
    private readonly tipodecambioRepository: Repository<Tipodecambio>
  ){}

  create(createTipodecambioDto: CreateTipodecambioDto) {
    return this.tipodecambioRepository.save(createTipodecambioDto)
  }

  async findAll() {
    return await this.tipodecambioRepository.find({where: {activo:true}});
  }

  async findOne(id: number) {
    const tipodecambioSeleccionado = await this.tipodecambioRepository.findOne({where: {id}})
    return tipodecambioSeleccionado
  }

  async update(id: number, updateTipodecambioDto: UpdateTipodecambioDto) {
    const dato = await this.tipodecambioRepository.findOne({where: { id }})
    const actualizarDato = Object.assign(dato, updateTipodecambioDto)
    return await this.tipodecambioRepository.save(actualizarDato)
  }

  async remove(id: number, updateTipodecambioDto: UpdateTipodecambioDto) {
    let updateDate: Date = new Date()
    const dato = await this.tipodecambioRepository.findOne({where: { id }})
    console.log("-----> ", updateTipodecambioDto.fechaActualizacion)
    const newTipodecambio = {
      "activo": false,
      "fechaDesactivacion": updateDate
    }
    const desactivado = Object.assign(dato, newTipodecambio)
    return this.tipodecambioRepository.save(desactivado)
  }
}
