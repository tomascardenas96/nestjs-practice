import { IsString, IsNotEmpty } from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  userName: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
