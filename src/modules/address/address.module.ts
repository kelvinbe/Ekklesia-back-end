import { Module } from "@nestjs/common";
import { AddressService } from "./address.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Addresses } from "./models/address.entity";



@Module({
    imports: [TypeOrmModule.forFeature([Addresses])],
    controllers: [],
    providers: [AddressService],
    exports: [AddressService]
})

export class AddressModule{}