import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { Cambiodemoneda } from "src/module/cambiodemoneda/entities/cambiodemoneda.entity"
import { Tipodecambio } from "src/module/tipodecambio/entities/tipodecambio.entity"
import { Usuario } from "src/module/usuario/entities/usuario.entity"


const TypeORMConfig: TypeOrmModuleOptions = {
    type: 'sqlite',
    database: ':memory:',
    entities: [
        Cambiodemoneda,
        Usuario,
        Tipodecambio,
    ],
    synchronize: true
}

export default TypeORMConfig