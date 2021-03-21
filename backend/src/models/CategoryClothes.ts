import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category_clothes')
export default class CategoryClothes {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  categoryName: string;

  @Column()
  productName: string;

  @Column()
  productDescription: string;

  @Column()
  productSizes: string;

  @Column()
  productColors: string;

  @Column()
  productPrice: 'decimal';
}