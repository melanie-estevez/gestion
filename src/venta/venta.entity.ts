import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productoId: number

  @Column()
  cantidad: number;

  @Column()
  precioUnitario: number;

  @Column()
  subtotal: number;

  @Column()
  iva: number;

  @Column()
  total: number;

  @Column()
  fechaVenta: Date;
}