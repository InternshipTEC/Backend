import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column()
    @IsEmail()
    @Length(6,30)
    email : String;

    @Column()
    @IsNotEmpty()
    name : String;

    @Column()
    @IsNotEmpty()
    password : String;
}