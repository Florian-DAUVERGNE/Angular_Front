import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from 'src/models/student';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private url = 'http://localhost:9428/api/students/'; // Replace with your actual API URL
  private studentsList: Student[] = [];
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentsList);

  constructor(private http: HttpClient,private router: Router) {
    this.getStudents();
  }

  getStudents(id?:string) {
    id == undefined ? this.url+='' : this.url+=id
    this.http.get<Student[]>(this.url).subscribe((students: Student[]) => {
      this.studentsList = students;
      this.students$.next(this.studentsList);
    });
  }

  getOneStudent(id:number) {
    this.http.get<Student[]>(this.url+id).subscribe((students: Student[]) => {
      this.studentsList = students;
      this.students$.next(this.studentsList);
    });
  }

  addStudent(student: Student) {
    this.http.post<Student>(this.url, student).subscribe((newStudent: Student) => {
      this.studentsList.push(newStudent);
      this.students$.next(this.studentsList);
      this.router.navigate(['/students']);
    });
  }

  updateStudent(student: Student) {
    this.http.put<Student>(this.url, student).subscribe(updatedStudent => {
      this.router.navigate([this.url]);
    });
  }

  deleteStudent(id : number) {
    this.http.delete<Student>(this.url+id).subscribe((newStudent: Student) => {
      this.getStudents()
    });
  }
}
