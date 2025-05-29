import { Column, Entity, PrimaryColumn } from "typeorm";

// Sa veut dire on utilise la table users
@Entity('users')
export class User{
    // definir les colonnes de la table

    @PrimaryColumn()
    userId: string

    @Column({unique: true})
    userName: string

    @Column()
    userPassword: string
}