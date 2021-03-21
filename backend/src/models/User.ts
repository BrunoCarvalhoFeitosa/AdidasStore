import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
} from 'typeorm';
import Image from './ImageUser';
@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  completeName: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Image, image => image.user, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'user_id' })
  images: Image[];
}