import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentFormComponent } from './students/student-form./student-form..component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { TicketPageComponent } from './tickets/ticket-page/ticket-page.component';

const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'students/add', component: StudentFormComponent },
  { path: 'students/:id', component: StudentDetailComponent },
  { path: 'tickets', component: TicketPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
