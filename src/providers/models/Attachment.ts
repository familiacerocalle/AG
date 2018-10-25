/**
 * Created by automator code on Thu Sep 06 23:47:51 IST 2018.
 */
import {AttachmentFile} from "./AttachmentFile";

export class Attachment {

    id: string;
    active: number;
    created_at: number;
    updated_at: number;
    type: string;
    url: string;
    file_name: string;
    entity_type: string;
    entity_id: string;
    file: AttachmentFile;

}