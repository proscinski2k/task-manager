import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: Number;
    
    @Column()
    title: String;

    @Column()
    description: String;

    @CreateDateColumn()
    created_at: Date; // Creation date

    @UpdateDateColumn()
    updated_at: Date; // Last updated date
}