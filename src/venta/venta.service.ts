import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './venta.entity';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  create(createVentaDto: CreateVentaDto) {
    const venta = this.ventaRepository.create(createVentaDto);
    return this.ventaRepository.save(venta);
  }

  findAll() {
    return this.ventaRepository.find();
  }

  findOne(id: string) {
    return this.ventaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateVentaDto: UpdateVentaDto) {
    const venta = await this.ventaRepository.findOne({ where: { id } });
    if (!venta) return null;
    Object.assign(venta, updateVentaDto);
    return this.ventaRepository.save(venta);
  }

  async remove(id: string) {
    const venta = await this.ventaRepository.findOne({ where: { id } });
    if (!venta) return null;
    return this.ventaRepository.remove(venta);
  }
}
