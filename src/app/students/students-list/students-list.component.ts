import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/services/student/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  public students: any;


  constructor(public studentService: StudentService,private router: Router) { }


  ngOnInit() {
    this.studentService.students$.subscribe(students => {
      this.students = students;
    });

  }

  navigateToStudentDetails(studentId: number) {
    this.router.navigate(['/students', studentId]);
  }

  deleteStudent(id:number) {
    this.studentService.deleteStudent(id);
  }
}
