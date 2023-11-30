import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket,MAJOR } from '../../../models/ticket';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student/student.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;


  public MAJOR_TYPE: MAJOR[] = [MAJOR.SI,MAJOR.IF]
  public students: any


  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    this.studentService.students$.subscribe(students => {
      this.students = students;
    });
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentID: ['']
    });
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.student = this.students.find((student: Student) => student.id === Number(this.ticketForm.getRawValue().studentID))
    ticketToCreate.archived = false;
    ticketToCreate.date = new Date()
    this.ticketService.addTicket(ticketToCreate);
  }

}
