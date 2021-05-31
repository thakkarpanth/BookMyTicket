import { Publisher, Subjects, TicketUpdatedEvent } from '@bookmyticketpt/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
