import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    nombre: string

    @Column('text')
    correo: string

    @Column('text')
    contrasena: string

    @Column({default:'user'})
    rol: string

    @DeleteDateColumn({nullable:true})
    fechadebaja: Date
}
