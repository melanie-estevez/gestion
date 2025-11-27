import { IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ventas')
export class CreateVentaDto {
  @IsNumber()
  productoId: number

  @IsNumber()
  cantidad: number;

  @IsNumber()
  precioUnitario: number;

  @IsNumber()
  subtotal: number;

  @IsNumber()
  iva: number;

  @IsNumber()
  total: number;

  @IsNumber()
  fechaVenta: Date;
}