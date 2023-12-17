import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cambiodemoneda {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    monedaOrigen: string

    @Column('text')
    monedaDestino: string

    @Column('decimal')
    tipoCambio: number

    @Column('decimal')
    montoConvertido: number

    @DeleteDateColumn()
    fechaHora: Date
}
