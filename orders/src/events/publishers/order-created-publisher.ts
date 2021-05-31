import { Publisher, OrderCreatedEvent, Subjects } from '@bookmyticketpt/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
