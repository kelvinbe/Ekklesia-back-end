import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameAddressTableColumn1564405856430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Addresses" RENAME COLUMN "PhysicalAddress" TO "physical_address"`);
        
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Addresses" RENAME COLUMN "physical_address" TO "PhysicalAddress"`);
    }

}
