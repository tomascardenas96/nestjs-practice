import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from 'typeorm';
import { Users } from '../../users/entity/users.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id_profile: number;

  @Column({ length: 50, nullable: false })
  nombre: string;

  @Column({ length: 50, nullable: false })
  apellido: string;

  @Column({ nullable: false })
  dni: number;

  @Column({ type: 'varchar', nullable: false })
  telefono: number;

  @Column({ length: 100, nullable: false })
  email: string;

  @Column({ length: 1000, nullable: true })
  avatar: string;

  @Column({ default: false })
  cliente: boolean;

  @OneToOne(() => Users, (users) => users.profile)
  user: Users;
}
