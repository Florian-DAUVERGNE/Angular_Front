import { STUDENTS } from './student.mock';
import { Ticket,MAJOR } from '../models/ticket';
import { StudentService } from 'src/services/student/student.service';
const dateToday: Date = new Date();
export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'IF1 in Paris8',
    description: '',
    date: dateToday,
    student:STUDENTS[0],
    major: MAJOR.IF,
    archived: true
  },
  {
    title: 'SI1 in Paris13',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS[1],
    major: MAJOR.SI,
    archived: false
  },
];
