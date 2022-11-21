import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmailEhUnico } from './validacao/email-eh-unico.validator';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @Column()
  password: string;

  @Column()
  role: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
