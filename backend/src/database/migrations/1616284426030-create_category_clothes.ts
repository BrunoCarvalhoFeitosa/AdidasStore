import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategoryClothes1616284426030 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'category_clothes',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: 'categoryName',
                    type: 'varchar',
                },
                {
                    name: 'productName',
                    type: 'varchar',
                },
                {
                    name: 'productDescription',
                    type: 'varchar',
                },
                {
                    name: 'productSizes',
                    type: 'varchar',
                },
                {
                    name: 'productColors',
                    type: 'varchar',
                },
                {
                    name: 'productPrice',
                    type: 'decimal',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('category_clothes');
    }
}
