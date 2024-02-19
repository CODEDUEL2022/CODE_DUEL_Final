import { IsString, IsUUID } from 'class-validator';

export class UpdateUserDto {
  @IsUUID()
  readonly id: string;
  @IsString()
  readonly name: string;
}
