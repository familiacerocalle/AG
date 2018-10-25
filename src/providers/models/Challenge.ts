import {ChallengeUser} from "./ChallengeUser";
import {Attachment} from "./Attachment";

export class Challenge {
    id: number;
    created_at: Date;
    updated_at: Date;
    nombre: string;
    contenido: string;
    puntos: string;
    descripcion: string;

    attachments: Attachment[] = [];
    challenge_user: ChallengeUser;
}
