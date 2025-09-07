import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { Tag } from './tag';

@Entity('quotes')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  content: string;

  @Column()
  content_vi: string;

  @ManyToOne(() => Tag, (tag) => tag.quotes)
  @JoinColumn({ name: 'tag', referencedColumnName: 'slug' })
  tag: Tag;
}
