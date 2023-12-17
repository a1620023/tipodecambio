import { Transform, Type } from "class-transformer"
import { IsString, MinLength, IsEmail, IsOptional, IsDate } from "class-validator"

export class CreateUsuarioDto {
    public id: number

    @IsString()
    @MinLength(3)
    public nombre: string

    @IsEmail()
    public correo: string

    @Transform(({value}) => value.trim())
    @IsString()
    @MinLength(6)
    public contrasena: string

    
    @IsOptional()
    @IsString()
    rol!: string

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    fechadebaja!: Date
}
