import { Controller, Get, Param, Post, Body, Put, Delete } from "@nestjs/common";
import { AddressService } from "./address.service";
import { Addresses } from "./models/address.entity";




@Controller('addresses')
export class AddressesController {
    constructor(private readonly addressService: AddressService){}

    @Get()
    async findall(){
        return await this.addressService.getAllAddresses();
    }

    @Get(':id')
    async findOne(@Param('id')id: string) {
        return await this.addressService.getOneAddress(id);

    }

    @Post()
    async create(@Body() address: Addresses) {
        return await this.addressService.createAddress(address)
    }

    @Put()
    async update(@Param('id') id: string, @Body() address: Addresses): Promise<Addresses>{
        return await this.addressService.editAddress(address)
    }

    @Delete()
    async delete(@Param('id') id: string): Promise<boolean>{
        return await this.addressService.deleteAddress(id)
    }
}






