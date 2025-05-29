import { Injectable } from '@nestjs/common';
import { MessagesDto } from 'src/models/messages.models';

@Injectable()
export class MessagesService {

    async getMessages(): Promise<string> {

    // logique metier pour recuperer tous les messages de la BDD

    return `tous les messages `;
    }

    async getMessage(id: number): Promise<string> {

    // logique metier pour recuperer tous le message avec l'id
    return `messages avec l'id:  ${id}`;
    }

    async postMessage(body: MessagesDto): Promise<string> {
        const {userId, userName, title, content} = body;
        // logique pour post en BDD
        return `message de post ${content}`;
    }
}

