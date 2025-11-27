import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosController } from './producto/producto.controller';
import { ProductosService } from './producto/producto.service';
import { ProductosModule } from './producto/producto.module';
import { VentasModule } from './venta/venta.module';
import { ConfigModule } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      //ssl: { rejectUnauthorized: false },
    }),
    ProductosModule,
    VentasModule
  ],
})
export class AppModule {}
