import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableAddress1564403619633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "addresses",
            columns: [{
                name: "id",
                type: "uuid",
                isPrimary: true,
                isGenerated: true,
            },
            {
                name: "PhysicalAddress",
                type: "varchar",
            },
            {
                name: "town",
                type: "varchar"
            }, 
            {
                name: "postCode",
                type: "int"
            },
            {
                name: "county",
                type: "varchar"
            },
            {
                name: "country",
                type: "varchar"
            }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("addresses")
    }

}
