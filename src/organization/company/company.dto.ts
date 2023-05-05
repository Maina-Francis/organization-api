import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export interface CompanyInterface {
  id: number;
  name: string;
  address: string;
  email: string;
  country: string;
}

export class CompanyDTO {
  // add validation to our company dto
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  country: string;
}
