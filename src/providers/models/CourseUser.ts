import {Course} from "./Course";

export class CourseUser {
    id: number;
    created_at: Date;
    updated_at: Date;
    course_id: number;
    user_id: number;
    fechainicio: Date;
    fechafin: string;
    course: Course;

}
