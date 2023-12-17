import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './module/usuario/usuario.module';
import { SeguridadModule } from './module/seguridad/seguridad.module';
import { MantenimientoModule } from './module/mantenimiento/mantenimiento.module';
import { CambiodemonedaModule } from './module/cambiodemoneda/cambiodemoneda.module';
import { TipodecambioModule } from './module/tipodecambio/tipodecambio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeORMConfig from 'typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMConfig),
    UsuarioModule,
    SeguridadModule,
    MantenimientoModule,
    CambiodemonedaModule,
    TipodecambioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
