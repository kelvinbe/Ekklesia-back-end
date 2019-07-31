import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoreService } from './stores.services';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Stores } from './models/store.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Stores])],
    controllers: [StoresController],
    providers: [StoreService],
    exports: [StoreService]
})
export class StoresModule {
}