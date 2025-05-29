import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesDto } from 'src/models/messages.models';

// Ceci est la route pour acceder a ce controller la route: 'messages'
@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService){}

    // Tous recuperer
    @Get()
    async getMessages(){
        const data = await this.messagesService.getMessages();
        return data;
    }
    
    // Selection via Id
    @Get(':id')
    async getMessage(@Param('id', ParseIntPipe) id: number){
        const data = await this.messagesService.getMessage(id);

        return data;
    }


    @Post()
    async postMessage(@Body('body') body: MessagesDto ) {
        const data = await this.messagesService.postMessage(body);
        return data;
    }
}
