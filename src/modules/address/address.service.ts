import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Addresses } from './models/address.entity';
import { Repository, Not } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Addresses)
    private readonly addressesRepository: Repository<Addresses>,
  ) {}

  async getAllAddresses() {
    await this.addressesRepository.find();
  }

  async getOneAddress(id: string) {
    const existingAddress = await this.addressesRepository.findOne(id);

    if (!existingAddress) {
      throw new NotFoundException('This address does not exist');
    }

    return existingAddress;
  }

  async createAddress(address: Addresses){

    if(!address.physicalAddress){
        throw new HttpException('Invalid Address details', HttpStatus.NOT_FOUND)
    }

      const newAddress = await this.addressesRepository.save(address)
      return newAddress
  }

  async editAddress(address: Addresses){
      const existingAddress = await this.addressesRepository.findOne()
  if(!existingAddress){
      throw new NotFoundException('This address does not exist')
  }

  const updateAddress = {...address, ...existingAddress}
  await this.addressesRepository.save(updateAddress)
  console.log(updateAddress)
  return updateAddress

}

    async deleteAddress(id: string){
        const existingAddress = await this.addressesRepository.findOne()
        if(!existingAddress){
            throw new NotFoundException('This address does not exist')
        }

        const deleteAddress = await this.addressesRepository.delete(existingAddress.id)

          return !!deleteAddress
        
        
    }



}
