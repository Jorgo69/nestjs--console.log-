import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { error, log } from 'console';
import { UsersService } from 'src/users/users.service';
import { AuthBodyDto } from './authBodyDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ){}

    errorMsg = " Mot de passe ou nom d'utilisateur  incorrect ";

    async login(authBody: AuthBodyDto){
        // destructuration
        const { userName, userPassword } = authBody;
        const existingUser = await this.usersService.getUser(userName);

        if(!existingUser) throw new UnauthorizedException({
            "error": this.errorMsg,
        });

        const isPasswordValid =  await this.isPasswordValid(userPassword, existingUser.userPassword);


        if(!isPasswordValid) throw new UnauthorizedException({
            "error": this.errorMsg,
        })

        return this.authentificateUser({userId: existingUser.userId});
    }

    // service de recup de profile
    async getProfileService(userName : string){
        const user = await this.usersService.getUser(userName);

        // si on trouve pas de user
        if(!user) throw new NotFoundException('Utilisateur non trouve');

        return { 
            userName : user.userName,
            userId: user.userId
         }

    }

    // verification du password hashed
    private async  isPasswordValid(password: string, hashedPassword: string): Promise<boolean>{
        return await compare(password, hashedPassword)
    }

    // pour gerer le token JWT
    private async authentificateUser({userId} : {userId: string}){
        const payload = { userId }
        return {
            access_token : await this.jwtService.sign(payload),
        }
    }
}
