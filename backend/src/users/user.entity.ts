import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { IsDefined, IsEmail, Max, Min } from "class-validator";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column({ unique: true })
    @Max(20)
    @IsDefined()
    login: string;

    @Column({ unique: true })
    @IsDefined()
    @IsEmail()
    email: string

    @Column({select: false})
    @IsDefined()
    @Min(8)
    password: string;

    @CreateDateColumn()
    created_at: Date; // Creation date
}