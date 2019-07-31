import {
  Controller,
  Get,
  Body,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { StoreService } from './stores.services';
import { Stores } from './models/store.entity';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoreService) {}

  @Get()
  async findAll() {
    return await this.storesService.getAllStores();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.storesService.getOneStore(id);
  }
  @Post()
  async create(@Body() store: Stores) {
    return await this.storesService.createStore(store);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() store: Stores,
  ): Promise<Stores> {
    return await this.storesService.updateStore(store);
  }
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.storesService.deleteStore(id);
  }
}
