import { Module } from '@nestjs/common';
import { StoresController } from './stores.controller';
import { StoreService } from './stores.services';
@Module({
    controllers: [StoresController],
    providers: [StoreService]
})
export class StoresModule {
}