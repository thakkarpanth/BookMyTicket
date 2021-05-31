import { Publisher, Subjects, TicketCreatedEvent } from '@bookmyticketpt/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
