import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ArrayOfNumAndString } from './types';

export class JobListDTO {
  @IsString()
  @IsNotEmpty()
  date_start_notification: string;

  @IsString()
  @IsNotEmpty()
  date_end_notification: string;

  contract_type_id: ArrayOfNumAndString;

  @IsString()
  @IsNotEmpty()
  suitable_for_disabilities: string;

  @IsInt()
  id: number;

  @IsNotEmpty()
  address_id: ArrayOfNumAndString;

  @IsNotEmpty()
  county_id: ArrayOfNumAndString;

  @ValidateNested()
  @Type(() => EmployerDetails)
  punedhenes_id: EmployerDetails;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  vlp_private_url: boolean;

  @IsNotEmpty()
  profession_id: ArrayOfNumAndString;

  @IsBoolean()
  job_shift_id: boolean;

  @IsInt()
  vacant_positions: number;
}

class EmployerDetails {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsString()
  image: boolean | string;

  @IsBoolean()
  image_type: boolean;
}
