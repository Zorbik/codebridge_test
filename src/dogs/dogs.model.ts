import {
  Column,
  Model,
  Table,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUIDV4)
  id: string;

  @Column({ unique: true })
  name: string;

  @Column
  color: string;

  @Column
  tail_length: number;

  @Column
  weight: number;
}
