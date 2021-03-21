import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import CategoryClothes from './CategoryClothes';

@Entity('products_images')
export default class ImageUser {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => CategoryClothes, categoryClothes => categoryClothes.images)
  @JoinColumn({ name: 'product_id' })
  categoryClothes: CategoryClothes
}