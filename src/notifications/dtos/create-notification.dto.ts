import { IsString } from "class-validator";
import { TopicTypes } from "../topic-types";

export class CreateNotificationDto {
    @IsString()
    topic: TopicTypes;
    
    @IsString()
    description: string;
}