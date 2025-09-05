import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Quote } from './quote';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  slug: string;

  @ManyToMany(() => Quote, (quote) => quote.tags)
  quotes: Quote[];
}
