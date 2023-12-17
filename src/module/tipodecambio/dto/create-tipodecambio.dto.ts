import { Type } from "class-transformer"
import { IsString, IsNumber, IsOptional, IsBoolean, IsDate } from "class-validator"

export class CreateTipodecambioDto {
    public id: number

    @IsString()
    public entidad: string

    @IsString()
    public monedaOrigen: string

    @IsString()
    public monedaDestino: string

    @IsNumber()
    public compra: number

    @IsNumber()
    public venta: number

    @IsOptional()
    @IsBoolean()
    public activo!: boolean

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fechaCreacion!: Date
    
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fechaActualizacion!: Date
       
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fechaDesactivacion!: Date
}
