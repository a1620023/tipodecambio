import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipodecambioService } from './tipodecambio.service';
import { CreateTipodecambioDto } from './dto/create-tipodecambio.dto';
import { UpdateTipodecambioDto } from './dto/update-tipodecambio.dto';
import { ApiTags } from '@nestjs/swagger';
import { Tipodecambio } from './entities/tipodecambio.entity';

@ApiTags('tipodecambio')
@Controller('tipodecambio')
export class TipodecambioController {
  constructor(private readonly tipodecambioService: TipodecambioService) {}

  @Post('crear')
  create(@Body() createTipodecambioDto: CreateTipodecambioDto): Promise<Tipodecambio> {
    return this.tipodecambioService.create(createTipodecambioDto);
  }

  @Get('listar')
  findAll() {
    return this.tipodecambioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipodecambioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipodecambioDto: UpdateTipodecambioDto) {
    return this.tipodecambioService.update(+id, updateTipodecambioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Body() deleteTipodecambioDto: UpdateTipodecambioDto) {
    return this.tipodecambioService.remove(+id, deleteTipodecambioDto);
  }
}
