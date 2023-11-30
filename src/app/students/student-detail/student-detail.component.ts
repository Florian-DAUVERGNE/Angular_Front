import { Component } from '@angular/core';
import { StudentService } from 'src/services/student/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent {
  public students: any;
  public studentDetailForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public studentService: StudentService,
    private route: ActivatedRoute
  ) {
    this.studentDetailForm = this.formBuilder.group({
      notes: [''],
    });
  }

  onSubmit() {
    this.students.notes = this.studentDetailForm.value.notes;
    this.studentService.updateStudent(this.students);
  }

  ngOnInit() {
    this.studentService.students$.subscribe((students) => {
      this.students = students;
    });
    const id = this.route.snapshot.paramMap.get('id') || undefined;
    this.studentService.getStudents(id);
  }
}
