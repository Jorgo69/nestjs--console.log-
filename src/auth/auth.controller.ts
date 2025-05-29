import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthBodyDto } from './authBodyDto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    // on envoie les credentials
    // on recupere le token JWT 
    @Post('login')
    async getAuth(@Body() authDto: AuthBodyDto){
        const data = await this.authService.login(authDto);

        return data;
    }

    // protection de la route profile
    // middleware
    // guard
    @UseGuards(AuthGuard)

    // On va recuperer le profil via token JWT
    @Get('profile')
    async getProfile(@Request() req){
        return  this.authService.getProfileService(req.user.userName);
    }
}
