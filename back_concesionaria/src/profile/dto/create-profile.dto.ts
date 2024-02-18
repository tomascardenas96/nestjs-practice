import {
  IsString,
  IsNumber,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsNumber()
  @IsNotEmpty()
  dni: number;

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsBoolean()
  @IsNotEmpty()
  cliente: boolean;
}
