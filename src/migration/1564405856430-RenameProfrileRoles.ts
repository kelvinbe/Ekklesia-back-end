import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameAddressTableColumn1564405856430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Addresses" ALTER COLUMN "PhysicalAddress" RENAME TO "physicalAddress" `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
