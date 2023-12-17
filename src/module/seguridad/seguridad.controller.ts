import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguridadService } from './seguridad.service';
import { CreateSeguridadDto } from './dto/create-seguridad.dto';
import { UpdateSeguridadDto } from './dto/update-seguridad.dto';

@Controller('seguridad')
export class SeguridadController {
  constructor(private readonly seguridadService: SeguridadService) {}

  @Post()
  create(@Body() createSeguridadDto: CreateSeguridadDto) {
    return this.seguridadService.create(createSeguridadDto);
  }

  @Get()
  findAll() {
    return this.seguridadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguridadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguridadDto: UpdateSeguridadDto) {
    return this.seguridadService.update(+id, updateSeguridadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguridadService.remove(+id);
  }
}
