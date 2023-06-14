import { Min, Max, IsNumber, Length } from 'class-validator';

export class CreateDogDto {
  @Length(2, 50, { message: 'name length must be between 2 and 50 characters' })
  name: string;

  color: string;

  @IsNumber({}, { message: 'tail_length must be a number' })
  @Min(0, { message: 'tail_length cannot be negative' })
  @Max(100, { message: 'tail_length cannot be greater than 100' })
  tail_length: number;

  @IsNumber({}, { message: 'weight must be a number' })
  @Min(0, { message: 'weight cannot be negative' })
  @Max(200, { message: 'weight cannot be greater than 200' })
  weight: number;
}
