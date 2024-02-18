import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';
import { UsersModule } from '../users/users.module';
import { Users } from 'src/users/entity/users.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Profile, Users])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
