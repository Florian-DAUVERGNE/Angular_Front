import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/services/student/student.service';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form..component.html',
  styleUrls: ['./student-form..component.css']
})
export class StudentFormComponent implements OnInit {
  public studentForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public studentService: StudentService) {
    // Form creation
    this.studentForm = this.formBuilder.group({
      prenom: [''],
      nom: [''],
      // Add other student properties here
    });
  }

  ngOnInit() {
  }

  addStudent() {
    const studentToCreate: Student = this.studentForm.getRawValue() as Student;
    this.studentService.addStudent(studentToCreate);
  }


}
