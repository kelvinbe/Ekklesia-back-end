import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class StoresEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string

    @Column({name: 'description', type: 'varchar', nullable: true})
    description: string
}