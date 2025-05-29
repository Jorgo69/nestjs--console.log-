import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async getUsers() : Promise<User[]> {
        return await this.userRepository.find(); // recup tout les users
    }

    async getUser(userName: string) : Promise<User | null> {
        return await this.userRepository.findOneBy({
            ['userName']: userName
        }); // recup un user
    }

    async createUserService(user : User) : Promise<string> {
        const userHashedPassword = await this.hashPassword(user.userPassword);

        try {
            await this.userRepository.save({
                ...user, userPassword: userHashedPassword // destructuration en inserer manuellement le mdp hashed
            }); // insere un user
            return 'l\'utilisateur a ete ajoute';
        } catch (error) {
            console.log('error ::: ', error);
            throw new Error("Impossible de creer l'utilisateur");
            
        }
    }


    private async hashPassword(password: string){
        const hashedPassword = await hash(password, 9);
        return hashedPassword;
    }
}
