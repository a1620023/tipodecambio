import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CambiodemonedaService } from './cambiodemoneda.service';
import { CreateCambiodemonedaDto } from './dto/create-cambiodemoneda.dto';
import { UpdateCambiodemonedaDto } from './dto/update-cambiodemoneda.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('cambiodemoneda')
@Controller('cambiodemoneda')
export class CambiodemonedaController {
  constructor(private readonly cambiodemonedaService: CambiodemonedaService) {}

  @Post('crear')
  create(@Body() createCambiodemonedaDto: CreateCambiodemonedaDto) {
    return this.cambiodemonedaService.create(createCambiodemonedaDto);
  }

  @Get("listar")
  findAll() {
    return this.cambiodemonedaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cambiodemonedaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCambiodemonedaDto: UpdateCambiodemonedaDto) {
    return this.cambiodemonedaService.update(+id, updateCambiodemonedaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cambiodemonedaService.remove(+id);
  }
}
