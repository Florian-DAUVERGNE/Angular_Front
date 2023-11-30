import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList);
  }

  deleteTicket(ticket: Ticket) {
    // code used to delete the ticket
    /*const idTicket = this.ticketList.indexOf(ticket)
    this.ticketList.splice(idTicket,1)
    this.tickets$.next(this.ticketList);*/

    // code used to turn a ticket into archived
    const idTicket = this.ticketList.indexOf(ticket)
    this.ticketList[idTicket].archived = true;
    this.tickets$.next(this.ticketList);
  }

  changeDisplayTicketArchived(displayTicketArchived: boolean){
    // change if the app should display archive ticket or non-archived
    displayTicketArchived = !displayTicketArchived
  }

}
