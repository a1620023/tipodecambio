import { PrimaryGeneratedColumn, Column, DeleteDateColumn, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Tipodecambio {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    entidad: string

    @Column('text')
    monedaOrigen: string

    @Column('text')
    monedaDestino: string

    @Column('decimal')
    compra: number

    @Column('decimal')
    venta: number

    @Column({default:true})
    activo: boolean

    @CreateDateColumn({default: ''})
    fechaCreacion: Date
    
    @UpdateDateColumn({default: ''})
    fechaActualizacion: Date
    
    @DeleteDateColumn({default: ''})
    fechaDesactivacion: Date
}
