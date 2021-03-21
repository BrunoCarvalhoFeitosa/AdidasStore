import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';
import Image from './ImageProducts';

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

  @OneToMany(() => Image, image => image.categoryClothes, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'product_id' })
  images: Image[];
}