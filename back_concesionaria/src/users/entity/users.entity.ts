import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from '../../profile/entity/profile.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn() 
  id_user: number;

  @Column({ unique: true, length: 50, nullable: false })
  userName: string;

  @Column({ length: 20, nullable: false })
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user) 
  @JoinColumn({ name: 'IdProfile' })
  profile: Profile;

}
