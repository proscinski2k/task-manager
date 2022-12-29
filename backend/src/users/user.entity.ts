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

    @Column({ unique: false })
    @IsDefined()
    @Max(20)
    firstname: string

    @Column({ unique: false })
    @Max(20)
    @IsDefined()
    lastname: string

    @Column({ unique: false })
    @IsDefined()
    @Max(100)
    safe_url: string

    @Column({ unique: false })
    @Max(200)
    profile_photo_url: string

    @Column({select: true})
    @IsDefined()
    @Min(8)
    password: string;

    @CreateDateColumn()
    created_at: Date; // Creation date
}