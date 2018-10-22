import {Challenge} from "./Challenge";

export class ChallengeUser {
    id: number;
    created_at: Date;
    updated_at: Date;
    challenge_id: number;
    user_id: number;
    fechainicio: Date;
    fechafin: string;
    challenge: Challenge;

}
