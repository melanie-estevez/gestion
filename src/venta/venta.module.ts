import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './venta.service';
import { VentasController } from './venta.controller';
import { Venta } from './venta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Venta])],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
