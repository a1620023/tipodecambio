import { Module } from '@nestjs/common';
import { CambiodemonedaService } from './cambiodemoneda.service';
import { CambiodemonedaController } from './cambiodemoneda.controller';

@Module({
  controllers: [CambiodemonedaController],
  providers: [CambiodemonedaService],
})
export class CambiodemonedaModule {}
