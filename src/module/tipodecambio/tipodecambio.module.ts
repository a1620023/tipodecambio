import { Module } from '@nestjs/common';
import { TipodecambioService } from './tipodecambio.service';
import { TipodecambioController } from './tipodecambio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tipodecambio } from './entities/tipodecambio.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([
          Tipodecambio,
      ]),
  ],
  controllers: [
    TipodecambioController
  ],
  providers: [
    TipodecambioService
  ],
})
export class TipodecambioModule {}
