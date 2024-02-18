import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
//importo el modulo de typeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'concesionaria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
