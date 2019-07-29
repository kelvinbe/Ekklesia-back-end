import {
  Injectable,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Stores } from './models/store.entity';
import { response } from 'express';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Stores)
    private readonly storesRepository: Repository<Stores>,
  ) {}

  async getAllStores() {
    return this.storesRepository.find();
  }

  async getOneStore(id: string) {
    const store = await this.storesRepository.findOne(id);

    if (!store) {
      throw new NotFoundException('This store does not exist');
    }

    return store;
  }

  async createStore(store: Stores) {
    if (!store.name) {
      throw new HttpException('Invalid store details', HttpStatus.NOT_FOUND);
    }

    const newStore = await this.storesRepository.save(store);

    return newStore;
  }

  async updateStore(store: Stores): Promise<Stores> {
    const existingStore = await this.storesRepository.findOne(store.id);
    if (!existingStore) {
      throw new NotFoundException('This store does not exist');
    }

    const updateStore = { ...store, ...existingStore };
    await this.storesRepository.save(updateStore);
    return updateStore;
  }

  async deleteStore(id: string): Promise<boolean> {
    const existingStore = await this.storesRepository.findOne({ where: id });

    if (!existingStore) {
      throw new NotFoundException('This store does not exist');
    }

    const deleteStore = await this.storesRepository.delete(existingStore.id);
    return !!deleteStore;
  }
}
