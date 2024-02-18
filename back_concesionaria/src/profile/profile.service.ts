import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entity/profile.entity';
import { Users } from '../users/entity/users.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
  ) {}

  async createProfile(id: number, profileDto: CreateProfileDto) {
    const userFound = await this.usersRepository.findOne({
      where: {
        id_user: id,
      },
    });

    if (!userFound) {
      throw new NotFoundException();
    }

    const newProfile = this.profileRepository.create(profileDto);
    const savedProfile = await this.profileRepository.save(newProfile);
    
    userFound.profile = savedProfile;
    return this.usersRepository.save(userFound);
  }
}
