import { Student } from 'src/models/student';
export enum MAJOR {
  SI = 'SI',
  IF = 'IF'
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  archived?: boolean;
  major?: MAJOR;
}
