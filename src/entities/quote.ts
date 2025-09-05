import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Tag } from './tag';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  content: string;

  @ManyToMany(() => Tag, (tag) => tag.quotes, { cascade: true })
  @JoinTable() // chỉ cần đặt ở 1 phía quan hệ
  tags: Tag[];
}
