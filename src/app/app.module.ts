import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentFormComponent } from './students/student-form./student-form..component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';
import { TicketPageComponent } from './tickets/ticket-page/ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    StudentsListComponent,
    StudentFormComponent,
    StudentDetailComponent,
    TicketPageComponent // All the components need to be declared
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule // Import all dependencies
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent]
})
export class AppModule {}
