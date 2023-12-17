import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCambiodemonedaDto {
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
    public activo: boolean
}
