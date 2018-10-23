import {Attachment} from "./Attachment";
import {AttachmentFile} from "./AttachmentFile";

export class ComplaintFile {
    id: number;
    created_at: Date;
    updated_at: Date;
    description: string;
    complaint_id: number;
    user_id: number;
    archivo: AttachmentFile;

    attachments: Attachment[];
}
