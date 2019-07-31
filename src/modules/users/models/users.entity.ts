import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';





@Entity('Users')
export class Users {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({type: "varchar", nullable: false })
    name: string;

    @Column({type: "int", nullable: true })
    address: number

    @Column({type: "varchar", nullable: false})
    email: string

    @Column({type: })



}