import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameAddressTable1564407176811 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "Addresses" RENAME TO "addresses"`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "addresses" RENAME TO "Addresses" `)
    }

}
