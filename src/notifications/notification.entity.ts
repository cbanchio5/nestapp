import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Notification {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    topic: string;
    
    @Column()
    description: string;
}