import {ComplaintType} from "./ComplaintType";
import {Attachment} from "./Attachment";
import {ComplaintFile} from "./ComplaintFile";

export class Complaint {
    id: number;
    created_at: Date;
    updated_at: Date;
    descripcion: string;
    user_id: number;
    complaint_type_id: number;
    files: string;
    challengelevel: string;

    complaintType: ComplaintType;
    attachments: Attachment[];
    complaintfiles: ComplaintFile[] = [];
}
