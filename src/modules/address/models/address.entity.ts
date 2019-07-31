import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('Addresses')
export class Addresses {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar', nullable: false})
    physicalAddress: string;

    @Column({type: 'varchar', nullable: true})
    town: string;

    @Column({type: 'int', nullable: true})
    postCode: number;

    @Column({type: 'varchar', nullable: false})
    county: string;

    @Column({type: 'varchar', nullable: false})
    country: string;

}