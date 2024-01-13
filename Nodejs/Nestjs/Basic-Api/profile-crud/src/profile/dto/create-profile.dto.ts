// importing few decorators from class-validator
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEERING', 'ADMIN'], {
    message: 'valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
